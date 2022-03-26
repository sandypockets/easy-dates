const { isInFuture } = require("../../dist");

test("tomorrow's date should return true", () => {
  const tomorrow = new Date(Date.now() + 86400000);
  expect(isInFuture(tomorrow)).toBe(true);
});

test("yesterday's date should return false", () => {
  const yesterday = new Date(Date.now() - 86400000);
  expect(isInFuture(yesterday)).toBe(false);
});

test("throw an error if given a non-date", () => {
  expect(() => isInFuture(null)).toThrow();
  expect(() => isInFuture(undefined)).toThrow();
  expect(() => isInFuture(true)).toThrow();
  expect(() => isInFuture(false)).toThrow();
  expect(() => isInFuture("")).toThrow();
  expect(() => isInFuture(0)).toThrow();
  expect(() => isInFuture(1)).toThrow();
  expect(() => isInFuture("string")).toThrow();
  expect(() => isInFuture({})).toThrow();
  expect(() => isInFuture([])).toThrow();
});
