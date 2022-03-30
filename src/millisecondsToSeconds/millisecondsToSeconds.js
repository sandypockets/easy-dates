export function millisecondsToSeconds(milliseconds) {
  if (typeof milliseconds === "number") {
    return milliseconds / 1000;
  } else {
    throw new Error("millisecondsToSeconds: milliseconds expects a number");
  }
}
