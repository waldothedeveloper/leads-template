import { assign, createMachine } from "xstate";
import { verifyZipcode, zipCodeRegex } from "../../utils/quiz_form_validation";

export const stepMachine = createMachine(
  {
    id: "zipcodeMachine",
    initial: "idle",
    context: {
      zipcode: "",
      verifiedAddress: null,
      address: null,
      errorMessage: "",
    },
    states: {
      idle: {
        on: {
          NEXT: { target: "verified", cond: "verifiedZipCode" },
          EDIT_ZIPCODE: {
            actions: ["assignZipCodeToContext"],
          },
        },

        initial: "pending",
        states: {
          pending: {
            always: {
              cond: "regexZipCode",
              target: "validating",
            },
          },
          validating: {
            invoke: {
              src: (ctx, _) => verifyZipcode(ctx.zipcode),
              onDone: [
                {
                  cond: (ctx, event) => {
                    // console.log("CHECKING ON_DONE", event.data);

                    if (
                      Object.keys(event.data).length > 0 &&
                      event.data[ctx.zipcode] &&
                      event.data[ctx.zipcode][0].state === "Florida"
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  },
                  actions: "validateZipCodeAndSaveToContext",
                  target: "valid",
                },
                { target: "invalid" },
              ],
              onError: [{ target: "retry" }],
            },
          },
          retry: {
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
          valid: {
            entry: ["assignVerifiedPostalCode"],
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
          },
          invalid: {
            entry: assign({ errorMessage: "Please enter a valid zipcode" }),
            on: {
              EDIT_ZIPCODE: {
                actions: ["assignZipCodeToContext"],
                target: "pending",
              },
            },
            exit: ["clearErrorMessage"],
          },
        },
      },
      verified: {
        type: "final",
      },
    },
  },
  {
    actions: {
      clearErrorMessage: assign({
        errorMessage: null,
      }),
      assignErrorMessageToContext: assign((_, event) => {
        const _a = event.data;

        if (_a === null || typeof _a === "undefined") {
          return {
            errorMessage: null,
          };
        }

        if (_a.message) {
          return {
            errorMessage: _a.message,
          };
        }

        return {
          errorMessage: "An unknown error occurred",
        };
      }),
      assignZipCodeToContext: assign((_, event) => {
        return {
          zipcode: event.value,
          verifiedAddress: "pending",
          address: null,
        };
      }),
      assignVerifiedPostalCode: assign((_, event) => {
        return {
          verifiedAddress: true,
        };
      }),
      validateZipCodeAndSaveToContext: assign((ctx, event) => {
        if (
          Object.keys(event.data).length > 0 &&
          event.data[ctx.zipcode] &&
          event.data[ctx.zipcode][0].state === "Florida"
        ) {
          const { city, state, postal_code } = event.data[ctx.zipcode][0];

          return {
            address: {
              city,
              state,
              postal_code,
            },
          };
        }

        return false;
      }),
    },

    guards: {
      regexZipCode: (ctx) =>
        ctx.verifiedAddress !== null && zipCodeRegex.test(ctx.zipcode),
      verifiedZipCode: (ctx, _) => ctx.address,
    },
  }
);
