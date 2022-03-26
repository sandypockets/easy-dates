export function hoursToMinutes(hours) {
  if (typeof hours === "number") {
    return hours * 60;
  } else {
    throw new Error("hoursToMinutes: hours must be a number");
  }
}
