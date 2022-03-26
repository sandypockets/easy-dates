export function millisecondsToMinutes(milliseconds) {
  if (typeof milliseconds === "number") {
    return milliseconds / 60000;
  } else {
    throw new Error("millisecondsToMinutes: milliseconds must be a number");
  }
}
