export function yearsToQuarters(years) {
  if (typeof years === "number") {
    return years * 4;
  } else {
    throw new Error("yearsToQuarters: expects a number");
  }
}
