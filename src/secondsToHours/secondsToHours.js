export function secondsToHours(seconds) {
  if (typeof seconds === "number") {
    return seconds / 3600;
  } else {
    throw new Error("secondsToHours: expects a number");
  }
}
