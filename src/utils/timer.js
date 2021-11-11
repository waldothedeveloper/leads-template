export const timer = (sec) => {
  var minutes = Math.floor(sec / 60);
  var seconds = sec % 60;

  const minText =
    minutes === 0
      ? ``
      : minutes > 1
      ? `${minutes} minutes`
      : `${minutes} minute`;
  return `${minText} ${seconds} seconds`;
};
