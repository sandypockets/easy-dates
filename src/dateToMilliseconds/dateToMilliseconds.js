export function dateToMilliseconds(date) {
  if (date instanceof Date) {
    return date.getTime();
  } else {
    throw new Error("dateToMilliseconds: date must be an instance of Date");
  }
}
