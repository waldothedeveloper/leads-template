import { assign, createMachine } from "xstate";

import { useDBTemplate } from "../../hooks/useDBTemplate";

export const useFormMachine = () => {
  const data = useDBTemplate();
  console.log("data: ", data);

  return createMachine({
    id: "formMachine",
    initial: "idle",
    context: {
      futureData: "empty",
    },
    states: {
      idle: {
        entry: () => console.log("starting the idle state"),
      },
    },
  });
};
