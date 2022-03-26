const { isInPast } = require("../../dist");

test("returns true when given yesterday's date", () => {
  const yesterday = new Date(new Date().getTime() - 86400000);
  expect(isInPast(yesterday)).toBe(true);
});

test("returns false when given tomorrow's date", () => {
  const tomorrow = new Date(Date.now() + 86400000);
  expect(isInPast(tomorrow)).toBe(false);
});

test("throw an error if given a non-date", () => {
  expect(() => isInPast(null)).toThrow();
  expect(() => isInPast(undefined)).toThrow();
  expect(() => isInPast(true)).toThrow();
  expect(() => isInPast(false)).toThrow();
  expect(() => isInPast("")).toThrow();
  expect(() => isInPast(0)).toThrow();
  expect(() => isInPast(1)).toThrow();
  expect(() => isInPast("string")).toThrow();
  expect(() => isInPast({})).toThrow();
  expect(() => isInPast([])).toThrow();
});
