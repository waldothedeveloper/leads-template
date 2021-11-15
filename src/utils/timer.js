export const timer = (sec) => {
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;

  const minText =
    minutes === 0
      ? ``
      : minutes > 1
      ? `${minutes} minutes`
      : `${minutes} minute`;
  return `${minText} ${seconds} seconds`;
};
