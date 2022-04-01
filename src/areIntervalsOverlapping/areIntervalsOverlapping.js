export function areIntervalsOverlapping(rangeOne, rangeTwo) {
  if (rangeOne && rangeTwo) {
    const unixStartOne = rangeOne[0].getTime() / 1000;
    const unixEndOne = rangeOne[1].getTime() / 1000;
    const unixStartTwo = rangeTwo[0].getTime() / 1000;
    const unixEndTwo = rangeTwo[1].getTime() / 1000;

    return unixStartOne <= unixEndTwo && unixEndOne >= unixStartTwo;
  } else {
    throw new Error("areIntervalsOverlapping: Invalid arguments");
  }
}
