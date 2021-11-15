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

      return verification === "phone_number"
        ? safeSet(
            currData,
            `data.quiz${number}.response`,
            formatPhoneNumber(event.value)
          )
        : safeSet(currData, `data.quiz${number}.response`, event.value);
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
      let zipcode, address;
      const data = event.data;
      // console.log("data: ", data);
      const number = safeGet(ctx, "currentQuiz");
      const { verification } = ctx.data[`quiz${number}`];

      if (verification === "zipcode") {
        [zipcode] = Object.keys(data);
        [address] = safeGet(data, zipcode);
        const { city, state, postal_code } = address;

        return safeSet(ctx, `data.quiz${number}.response`, {
          city,
          state,
          postal_code,
        });
      }

      if (verification === "phone_number") {
        safeSet(ctx, `data.quiz${number}.response`, data.nationalFormat);
        safeSet(ctx, `data.quiz${number}.valid_phone`, data.valid_phone);
        return;
      }
    }),
    nextQuestion: assign((ctx, event) => {
      if (event.type !== "NEXT") return {};

      const totalOfQuestions = Object.keys(ctx.data).length;
      const number = safeGet(ctx, "currentQuiz");
      const optional = safeGet(ctx, `data.quiz${number}.optional`);
      const response = safeGet(ctx, `data.quiz${number}.response`);

      if (number < totalOfQuestions) {
        if (optional) {
          return (ctx.currentQuiz += 1);
        } else if (response) {
          return (ctx.currentQuiz += 1);
        }
        return ctx;
      }
    }),
    prevQuestion: assign((ctx, event) => {
      if (event.type !== "PREV") return {};

      if (ctx.currentQuiz > 1) {
        return (ctx.currentQuiz -= 1);
      }
    }),
  },
};
