export function minutesToHours(minutes) {
  if (typeof minutes === "number") {
    return minutes / 60;
  } else {
    throw new Error("minutesToHours expects a number");
  }
}
