import { assign } from "xstate";
import { formatPhoneNumber } from "../../utils/quiz_form_validation";
//
export const options = {
  actions: {
    updateState: assign((ctx, event) => {
      if (event.type !== "CHANGE") return {};
      const value = event.value;
      const number = ctx.currentQuiz;
      const currData = { ...ctx };
      const currentQuestion = currData.data[`quiz${number}`];
      const { verification } = currentQuestion;

      if (verification === "phone_number") {
        currentQuestion.response = formatPhoneNumber(value);
      } else {
        currentQuestion.response = value;
      }

      //
      return currData;
    }),
    showErrorMessage: assign((ctx, _) => {
      const number = ctx.currentQuiz;
      const currData = { ...ctx };
      const currentQuestion = currData.data[`quiz${number}`];
      const { verification } = currData.data[`quiz${number}`];

      //
      currentQuestion.verified = null;
      if (verification === "phone_number") {
        currentQuestion.errorMessage = "Please enter a valid phone number";
      }
    }),
    validateAndSaveToContext: assign((ctx, event) => {
      const number = ctx.currentQuiz;
      const currentQ = ctx.data[`quiz${number}`];
      const eventData = event.data;

      const { city, state, postal_code } = eventData[currentQ.response][0];

      currentQ.response = { city, state, postal_code };
    }),
    nextQuestion: assign((ctx, event) => {
      if (event.type !== "NEXT") return {};

      const number = ctx.currentQuiz;
      const totalOfQuestions = Object.keys(ctx.data).length;

      if (number < totalOfQuestions) {
        if (ctx.data[`quiz${number}`].optional) {
          ctx.currentQuiz += 1;
        } else if (ctx.data[`quiz${number}`].response) {
          ctx.currentQuiz += 1;
        }
        return true;
      }

      // return {};
    }),
    prevQuestion: assign((ctx, event) => {
      if (event.type !== "PREV") return {};

      if (ctx.currentQuiz > 1) {
        return (ctx.currentQuiz -= 1);
      }
    }),
  },
};
