export function millisecondsToHours(milliseconds) {
  if (typeof milliseconds === "number") {
    return milliseconds / 1000 / 60 / 60;
  } else {
    throw new Error("millisecondsToHours: milliseconds must be a number");
  }
}
