import { assign, createMachine } from "xstate";
import {
  validatePhoneNumber,
  verifyZipcode,
  zipCodeRegex,
} from "../../utils/quiz_form_validation";

export const formMachine = (data) => {
  return createMachine({
    id: "formMachine",
    initial: "idle",

    context: {
      currentQuiz: 1,
      data: { ...data },
    },
    states: {
      idle: {
        // entry: () => console.log("Entering the I-D-L-E state"),
        always: {
          cond: (ctx, _) => {
            const id = ctx.currentQuiz;
            const { verification, response } = ctx.data[`quiz${id}`];

            if (verification === "zipcode") {
              return zipCodeRegex.test(response);
            }

            if (verification === "phone_number") {
              return response !== null && response.length > 2;
            }
          },
          target: "validating",
        },
        on: {
          CHANGE: {
            actions: ["updateState", "showErrorMessage"],
          },
          NEXT: {
            actions: "nextQuestion",
          },
          PREV: {
            actions: "prevQuestion",
          },
        },
      },
      validating: {
        // entry: () => console.log("ENTER TO THE VALIDATING STATE"),
        on: {
          CHANGE: {
            actions: ["updateState", "showErrorMessage"],
          },
        },
        always: {
          target: "valid",
          cond: (ctx, _) => {
            const number = ctx.currentQuiz;
            const { verification, response } = ctx.data[`quiz${number}`];

            if (verification === "phone_number") {
              return validatePhoneNumber(response);
            }
            return false;
          },
        },
        invoke: {
          src: (ctx, _) => {
            const number = ctx.currentQuiz;
            const { verification, response } = ctx.data[`quiz${number}`];

            if (verification === "zipcode") {
              return verifyZipcode(response);
            }
          },
          onDone: [
            {
              cond: (_, event) => {
                const zipcode = Object.keys(event.data);

                if (zipcode.length > 0) {
                  const { state } = event.data[zipcode[0]][0];
                  return state === "Florida" ? true : false;
                }
              },
              target: "valid",
              actions: "validateAndSaveToContext",
            },
            { target: "error" },
          ],
          onError: [{ target: "retry" }],
        },
        //
      },
      valid: {
        entry: (ctx, _) => {
          // console.log("ENTER TO THE VALID!!!! STATE");
          const number = ctx.currentQuiz;
          let currentQuestion = ctx.data[`quiz${number}`];

          currentQuestion.errorMessage = "";
          currentQuestion.verified = true;
          return currentQuestion;
        },

        on: {
          CHANGE: {
            actions: ["updateState", "showErrorMessage"],
            target: "idle",
          },
          NEXT: {
            target: "idle",
            actions: "nextQuestion",
          },

          PREV: {
            target: "idle",
            actions: "prevQuestion",
          },
        },
      },
      retry: {
        // entry: () => console.log("ENTER TO THE RETRY-RETRY STATE"),
        on: {
          CHANGE: {
            actions: ["updateState"],
            target: "idle",
          },
        },
      },
      error: {
        entry: assign((ctx, event) => {
          // console.log("ENTER TO THE ERROR ! STATE");
          const number = ctx.currentQuiz;
          const currentQ = ctx.data[`quiz${number}`];
          currentQ.errorMessage = "Our support is currently limited to Florida";
          return currentQ;
        }),
        on: {
          CHANGE: {
            target: "idle",
            actions: ["updateState"],
          },
        },
        //
      },
      complete: {
        // entry: () => console.log("FINAL STATE!!!!!!"),
        type: "final",
      },
    },
  });
};
