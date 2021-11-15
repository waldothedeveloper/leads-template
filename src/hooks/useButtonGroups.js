import safeGet from "just-safe-get";
import { saveToDB } from "../utils/save-to-db";
import { useCallback } from "react";

export const useButtonGroups = ({ stateMachine, send, currentQuestion }) => {
  const currNum = safeGet(stateMachine, "context.currentQuiz");
  const totalQuiz = Object.keys(safeGet(stateMachine, "context.data")).length;

  const { response, optional, type, verified } = currentQuestion;

  const disabled = (() => {
    if (optional) return true;

    if (type === "tel" && verified) return true;

    if (type !== "tel" && response) return true;

    return false;
  })();

  // we need to extract this to it's own function/component
  const sendPrevious = useCallback(() => send("PREV"), [send]);

  const sendNext = useCallback(() => send("NEXT"), [send]);

  const sendSubmit = useCallback(() => {
    let fields = {};

    for (let key in stateMachine.context.data) {
      fields = {
        ...fields,
        "Lead-Date": new Date(),
        [stateMachine.context.data[key].question]:
          stateMachine.context.data[key].verification === "zipcode"
            ? `city: ${stateMachine.context.data[key].response.city}\n state: ${stateMachine.context.data[key].response.state}\n zipcode: ${stateMachine.context.data[key].response.postal_code}\n`
            : stateMachine.context.data[key].response,
      };
    }

    return saveToDB(fields);
  }, [stateMachine]);

  return { sendPrevious, sendNext, sendSubmit, disabled, currNum, totalQuiz };
};
