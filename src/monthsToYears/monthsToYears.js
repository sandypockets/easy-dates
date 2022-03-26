export function monthsToYears(months) {
  if (typeof months === "number") {
    return months / 12;
  } else {
    throw new Error("monthsToYears: months must be a number");
  }
}
