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
        entry: () => console.log("Entering the I-D-L-E state"),
        always: {
          cond: (ctx, _) => {
            const currentQuestionNumber = ctx.currentQuiz;
            const state = ctx.data;
            const currentQ = state[`quiz${currentQuestionNumber}`];

            if (currentQ.verification === "zipcode") {
              return zipCodeRegex.test(currentQ.response);
            }

            if (currentQ.verification === "phone_number") {
              return currentQ.response !== null && currentQ.response.length > 2;
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
        entry: () => console.log("ENTER TO THE VALIDATING STATE"),
        on: {
          CHANGE: {
            actions: ["updateState", "showErrorMessage"],
          },
        },
        always: {
          target: "valid",
          cond: (ctx, _) => {
            const currentQuestionNumber = ctx.currentQuiz;
            const state = ctx.data;
            const currentQ = state[`quiz${currentQuestionNumber}`];

            if (currentQ.verification === "phone_number") {
              return validatePhoneNumber(currentQ.response);
            }
          },
        },
        invoke: {
          src: (ctx, _) => {
            const currentQuestionNumber = ctx.currentQuiz;
            const state = ctx.data;
            const currentQ = state[`quiz${currentQuestionNumber}`];

            if (currentQ.verification === "zipcode") {
              return verifyZipcode(currentQ.response);
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
          console.log("ENTER TO THE VALID!!!! STATE");
          const currentQuestionNumber = ctx.currentQuiz;
          const state = ctx.data;
          const currentQ = state[`quiz${currentQuestionNumber}`];

          currentQ.errorMessage = "";
          currentQ.verified = true;
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
        on: {
          CHANGE: {
            actions: ["updateState"],
            target: "idle",
          },
        },
      },
      error: {
        entry: assign((ctx, event) => {
          const currentQuestionNumber = ctx.currentQuiz;
          const state = ctx.data;
          const currentQ = state[`quiz${currentQuestionNumber}`];
          currentQ.errorMessage = "Our support is currently limited to Florida";
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
        type: "final",
      },
    },
  });
};
