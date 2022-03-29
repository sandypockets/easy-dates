export function quartersToMonths(quarters) {
  if (typeof quarters === "number") {
    return quarters * 3;
  } else {
    throw new Error("quartersToMonths: expects a number");
  }
}
