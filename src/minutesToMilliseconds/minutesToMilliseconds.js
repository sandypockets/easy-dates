export function minutesToMilliseconds(minutes) {
  if (typeof minutes === "number") {
    return minutes * 60000;
  } else {
    throw new Error("minutesToMilliseconds: minutes must be a number");
  }
}
