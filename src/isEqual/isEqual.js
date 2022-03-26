export function isEqual(dateOne, DateTwo) {
  if (dateOne instanceof Date && DateTwo instanceof Date) {
    return dateOne.getTime() === DateTwo.getTime();
  } else {
    throw new Error("Both arguments must be Date objects");
  }
}
