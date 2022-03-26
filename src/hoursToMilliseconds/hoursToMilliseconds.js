export function hoursToMilliseconds(hours) {
  if (
    typeof hours === "number" ||
    (typeof hours === "string" && Number.isInteger(Number(hours)))
  ) {
    return hours * 60 * 60 * 1000;
  } else {
    throw new Error("hoursToMilliseconds: hours must be a number");
  }
}
