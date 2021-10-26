import { assign } from "xstate";
import { formatPhoneNumber } from "../../utils/quiz_form_validation";
//
export const options = {
  actions: {
    updateState: assign((ctx, event) => {
      if (event.type !== "CHANGE") return {};
      const value = event.value;
      const currentQuestionNumber = ctx.currentQuiz;
      const currData = { ...ctx };

      if (
        currData.data[`quiz${currentQuestionNumber}`].verification ===
        "phone_number"
      ) {
        currData.data[`quiz${currentQuestionNumber}`].response =
          formatPhoneNumber(value);
      } else {
        currData.data[`quiz${currentQuestionNumber}`].response = value;
      }

      //
      return currData;
    }),
    showErrorMessage: assign((ctx, _) => {
      const currentQuestionNumber = ctx.currentQuiz;
      const currData = { ...ctx };
      currData.data[`quiz${currentQuestionNumber}`].verified = null;

      if (
        currData.data[`quiz${currentQuestionNumber}`].verification ===
        "phone_number"
      ) {
        currData.data[`quiz${currentQuestionNumber}`].errorMessage =
          "Please enter a valid phone number";
      }
    }),
    validateAndSaveToContext: assign((ctx, event) => {
      const currentQuestionNumber = ctx.currentQuiz;
      const currentQ = ctx.data[`quiz${currentQuestionNumber}`];
      const eventData = event.data;

      const { city, state, postal_code } = eventData[currentQ.response][0];

      currentQ.response = { city, state, postal_code };
    }),
    nextQuestion: assign((ctx, event) => {
      if (event.type !== "NEXT") return {};

      const currentQuestionNumber = ctx.currentQuiz;
      const totalOfQuestions = Object.keys(ctx.data).length;

      if (currentQuestionNumber < totalOfQuestions) {
        if (ctx.data[`quiz${currentQuestionNumber}`].optional) {
          ctx.currentQuiz += 1;
        } else if (ctx.data[`quiz${currentQuestionNumber}`].response) {
          ctx.currentQuiz += 1;
        }
      }
    }),
    prevQuestion: assign((ctx, event) => {
      if (event.type !== "PREV") return {};

      if (ctx.currentQuiz > 1) ctx.currentQuiz -= 1;
    }),
  },
};
