export function isBefore(date, dateToCompare) {
  if (date instanceof Date && dateToCompare instanceof Date) {
    return date.getTime() < dateToCompare.getTime();
  } else {
    throw new Error("Invalid arguments");
  }
}
