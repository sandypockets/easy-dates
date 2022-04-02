import { unixToDate } from "../unixToDate/unixToDate";

export function getOverlappingDaysInIntervals(rangeOne, rangeTwo) {
  if (Array.isArray(rangeOne) && Array.isArray(rangeTwo)) {
    const unixOneDay = 24 * 60 * 60;
    const unixStartOne = rangeOne[0].getTime() / 1000;
    const unixEndOne = rangeOne[1].getTime() / 1000;
    const unixStartTwo = rangeTwo[0].getTime() / 1000;
    const unixEndTwo = rangeTwo[1].getTime() / 1000;

    if (unixStartOne <= unixEndTwo && unixEndOne >= unixStartTwo) {
      let resultArray = [];

      const overlappingStart = Math.max(unixStartOne, unixStartTwo);
      const overlappingEnd = Math.min(unixEndOne, unixEndTwo);
      const numOfOverlappingDays =
        (overlappingEnd - overlappingStart) / unixOneDay;

      for (let i = 0; i <= numOfOverlappingDays; i++) {
        const overlappingDateItem = unixToDate(
          overlappingStart + i * unixOneDay
        );
        resultArray.push(overlappingDateItem);
      }
      return resultArray;
    } else {
      throw new Error(
        "getOverlappingDaysInIntervals: The two ranges do not overlap"
      );
    }
  } else {
    throw new Error(
      "getOverlappingDaysInIntervals: One or more of the arguments are missing and/or are not an array"
    );
  }
}
