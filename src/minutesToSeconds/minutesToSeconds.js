export function minutesToSeconds(minutes) {
  if (typeof minutes === "number") {
    return minutes * 60;
  } else {
    throw new Error("minutesToSeconds: expects a number");
  }
}
