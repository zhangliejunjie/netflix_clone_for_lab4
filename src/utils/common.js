export const getRandomNumber = (maxNumber) =>
  Math.floor(Math.random() * maxNumber);

export const formatMinuteToReadable = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes - h * 60;

  if (h > 0) {
    return `${h}h ${m}m`;
  } else {
    return `${m}m`;
  }
};
