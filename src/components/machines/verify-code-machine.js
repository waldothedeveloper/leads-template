import { assign, createMachine } from "xstate";

import { finishPhoneVerification } from "../../utils/finish-phone-verification";
import { navigate } from "gatsby-link";
import { sendVerificationCode } from "../../utils/send_verification_code";
import { updateVerifiedLead } from "../../utils/update-verified-lead";

export const verifyCodeMachine = (phone, recordID) => {
  return createMachine(
    {
      id: "verify-code-machine",
      initial: "idle",
      context: {
        code: "",
        errorMessage: "",
        status: "",
        attempts: 0,
      },

      states: {
        idle: {
          entry: () => {
            // console.log("Entering the I-D-L-E state");
          },
          invoke: {
            id: "send_SMS_Code",
            src: (_, event) => {
              //? ???????????????? mockup API -> DELETE THIS LATER
              // const mockUpSendSMSCode = () => {
              //   return Promise.resolve({
              //     message: "SMS code requested successfully",
              //     status: "pending",
              //     attempts: [{ msg: "One" }, { msg: "Two" }, { msg: "Three" }],
              //   });
              // };

              // return mockUpSendSMSCode();

              //! this is the REAL API
              return sendVerificationCode(phone);
            },
            onDone: [
              {
                cond: (ctx, event) => {
                  // console.log(
                  //   "onDone -> DATA FROM SEND SMS TO PHONE API: ",
                  //   event.data
                  // );

                  const { data } = event;

                  if (data?.status === 429) {
                    ctx.errorMessage =
                      "You have reached your limit for verification attempts.";
                    return navigate("/not-allowed", {
                      state: {
                        message:
                          "You have reached your limit for verification attempts.",
                        code: data.status,
                      },
                    });
                  } else if (data?.status !== "pending") {
                    ctx.errorMessage =
                      "There was an unanticipated error. Please give us a call.";
                    return false;
                  } else {
                    return {
                      status: data?.status,
                      attempts: data?.attempts?.length,
                    };
                  }
                },
                target: "smsCodeSent",
              },
              { target: "errorSendingSMS" },
            ],
            onError: {
              target: "errorSendingSMS",
              actions: assign((ctx, event) => {
                ctx.errorMessage =
                  "There was an unanticipated error. Please give us a call.";
                // console.log("onError -> FROM SEND SMS TO PHONE API: ", event);
              }),
            },
          },
        },
        errorSendingSMS: {
          entry: () => {
            // console.log("Entering the SMS-CODE-SENT state");
            navigate("/app-error", { state: { phoneNumber: phone } });
          },
        },
        smsCodeSent: {
          // entry: () => console.log("Entering the SMS-CODE-SENT state"),
          on: {
            RESEND_SMS: {
              target: "idle",
            },
            CHANGE: {
              actions: assign({ code: (ctx, event) => event.value }),
            },
            SUBMIT_CODE: {
              target: "validating",
              cond: (ctx, _) => ctx.code.length === 6,
            },
          },
        },
        smsCodeNotSent: {
          entry: [
            "writeAppErrorMessage",
            // () => console.log("SMS CODE NOT SENT state!"),
          ],
        },
        validating: {
          entry: () => {
            // console.log("Entering the VALIDATING VALIDATING VALIDATING state")
          },

          invoke: {
            src: (ctx, event) => {
              const { code } = ctx;
              // ? ?????????????????? mockup API -> DELETE THIS LATER
              // const mockUpVERIFYSMSCode = () => {
              //   return Promise.resolve({
              //     message: "SMS code verification successfully",
              //     status: "completed",
              //     attempts: [{ msg: "One" }, { msg: "Two" }],
              //   });
              // };

              // return mockUpVERIFYSMSCode().then(() => false);

              //! verify the code here -> REAL API HERE
              return finishPhoneVerification({ code: code, phone: phone });
            },
            onDone: [
              {
                target: "valid",
                cond: (ctx, event) => {
                  const data = event.data;
                  // console.log("Response from verify SMS code sent: ", data);
                  return data.status !== "approved" ? false : data;
                },
              },
              { target: "invalid" },
            ],
            onError: [{ target: "retry" }],
          },
        },
        valid: {
          // entry: () => console.log("Entering VALID WOHOO STATE!"),
          invoke: {
            src: () => {
              // call the function that will update the record on AirTable
              return updateVerifiedLead(recordID);
            },
            onDone: [
              {
                target: "done",
                cond: (_, event) => {
                  const { status } = event.data;

                  return status === 200 ? event.data : false;
                },
              },
              { target: "dbError" },
            ],
            onError: [{ target: "dbError" }],
          },
        },

        invalid: {
          entry: ["writeErrorMessage"],
          on: {
            CHANGE: {
              actions: "updateState",
            },
            SUBMIT_CODE: {
              target: "validating",
              cond: (ctx, _) => ctx.code.length === 6,
            },
          },
          exit: ["clearErrorMessage"],
        },
        retry: {
          always: {
            cond: (ctx, event) => {
              if (ctx.attempts === 5) {
                navigate("/app-error", { state: { phoneNumber: phone } });
              }
            },
          },
          entry: ["writeAppErrorMessage"],
          on: {
            CHANGE: {
              actions: "updateState",
            },
            SUBMIT_CODE: {
              target: "validating",
              cond: (ctx, _) => ctx.code.length === 6,
            },
          },
          exit: ["clearErrorMessage"],
        },
        done: {
          type: "final",
          entry: () => {
            // console.log("ARRIVED THE FINAL STATE ----->> DONE");
            //! INITIATE THE CALL FLOW TO CLIENT
            navigate("/thank-you");
          },
        },
        dbError: {
          entry: () => navigate("/app-error"),
        },
      },
    },
    {
      actions: {
        updateState: assign((_, event) => {
          if (event.type !== "CHANGE") return {};
          const value = event.value;

          return { code: value };
        }),
        writeErrorMessage: assign((ctx, event) => {
          return {
            errorMessage:
              "The code you submitted is not valid. Please try again.",
          };
        }),
        writeAppErrorMessage: assign((ctx, event) => {
          return {
            errorMessage:
              "Our system has detected an unexpected error. Please try again.",
            attempts: (ctx.attempts += 1),
          };
        }),
        clearErrorMessage: assign((ctx, event) => {
          return {
            errorMessage: "",
          };
        }),
      },
    }
  );
};
