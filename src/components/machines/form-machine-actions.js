import { assign } from "xstate";
import { formatPhoneNumber } from "../../utils/quiz_form_validation";
import safeGet from "just-safe-get";
import safeSet from "just-safe-set";
//
export const options = {
  actions: {
    updateState: assign((ctx, event) => {
      if (event.type !== "CHANGE") return {};

      const currData = { ...ctx };
      const number = safeGet(currData, "currentQuiz");
      const verification = safeGet(currData, `data.quiz${number}.verification`);

      verification === "phone_number"
        ? safeSet(
            currData,
            `data.quiz${number}.response`,
            formatPhoneNumber(event.value)
          )
        : safeSet(currData, `data.quiz${number}.response`, event.value);

      return currData;
    }),
    showErrorMessage: assign((ctx, _) => {
      const currData = { ...ctx };
      const number = safeGet(currData, "currentQuiz");
      const verification = safeGet(currData, `data.quiz${number}.verification`);

      safeSet(currData, `data.quiz${number}.verified`, null);

      if (verification === "phone_number") {
        safeSet(
          currData,
          `data.quiz${number}.errorMessage`,
          "Please enter a valid phone number"
        );
      }

      return currData;
    }),
    validateAndSaveToContext: assign((ctx, event) => {
      const number = safeGet(ctx, "currentQuiz");
      let zipcode, address;
      // simpler var
      const data = event.data;
      // destructuring the zipcode returned by the zipcodebase API
      [zipcode] = Object.keys(data);
      // destructuring the full address array returned by the zipcodebase API
      [address] = safeGet(data, zipcode);
      const { city, state, postal_code } = address;
      // saving the data on context
      return safeSet(ctx, `data.quiz${number}.response`, {
        city,
        state,
        postal_code,
      });
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
