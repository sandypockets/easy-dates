export function weeksToDays(weeks) {
  if (typeof weeks === "number" && weeks >= 0) {
    return weeks * 7;
  } else {
    throw new Error("weeksToDays: weeks expects a number above zero");
  }
}
