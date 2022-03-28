export function findLatest(arr) {
  if (arr.length <= 1) {
    throw new Error("findLatest: Array should contain at least 2 dates");
  } else {
    return arr.reduce((acc, curr) => {
      if (typeof acc === "number" && typeof curr === "number") {
        return Math.max(acc, curr);
      } else if (typeof acc === "object" && typeof curr === "object") {
        return Math.max(acc.getTime(), curr.getTime());
      } else {
        throw new Error("findLatest: Array should contain only numbers");
      }
    });
  }
}
