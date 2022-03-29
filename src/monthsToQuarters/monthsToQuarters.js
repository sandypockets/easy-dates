export function monthsToQuarters(months) {
  if (typeof months === "number") {
    return months / 3;
  } else {
    throw new Error("monthsToQuarters: expects a number");
  }
}
