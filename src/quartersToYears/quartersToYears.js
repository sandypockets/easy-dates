export function quartersToYears(quarters) {
  if (typeof quarters === "number") {
    return quarters / 4;
  } else {
    throw new Error("quartersToYears: expects a number");
  }
}
