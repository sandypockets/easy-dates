export function secondsToMilliseconds(seconds) {
  if (typeof seconds === "number") {
    return seconds * 1000;
  } else {
    throw new Error("secondsToMilliseconds: expects a number");
  }
}
