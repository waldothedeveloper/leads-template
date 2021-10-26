export const getCurrentQuestion = (stateMachine) => {
  const data = stateMachine.context.data;
  const number = stateMachine.context.currentQuiz;
  const currentQ = data[`quiz${number}`];

  return currentQ;
};
