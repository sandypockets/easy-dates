export function yearsToDays(years) {
  if (typeof years === "number") {
    return years * 365;
  } else {
    throw new Error("yearsToDays: expects a number");
  }
}
