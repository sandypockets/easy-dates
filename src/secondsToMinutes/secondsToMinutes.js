export function secondsToMinutes(seconds) {
  if (typeof seconds === "number") {
    return seconds / 60;
  } else {
    throw new Error("secondsToMinutes: expects a number");
  }
}
