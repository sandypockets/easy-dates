export function yearsToMonths(years) {
  if (typeof years === "number") {
    return years * 12;
  } else {
    throw new Error("yearsToMonths: expects a number");
  }
}
