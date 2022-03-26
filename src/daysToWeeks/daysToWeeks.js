export function daysToWeeks(days) {
  if (typeof days === "number") {
    return days / 7;
  } else {
    throw new Error("daysToWeeks: days must be a number");
  }
}
