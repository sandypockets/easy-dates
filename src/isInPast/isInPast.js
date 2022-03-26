export function isInPast(date) {
  if (date instanceof Date) {
    return date.getTime() < Date.now();
  } else {
    throw new Error("date must be a Date object");
  }
}
