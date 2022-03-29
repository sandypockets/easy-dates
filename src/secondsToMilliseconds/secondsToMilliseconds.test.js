const { secondsToMilliseconds } = require("../../dist");

test("it returns a number type", () => {
  expect(typeof secondsToMilliseconds(1)).toBe("number");
});

test("returns the correct value", () => {
  expect(secondsToMilliseconds(1)).toBe(1000);
  expect(secondsToMilliseconds(2)).toBe(2000);
  expect(secondsToMilliseconds(234)).toBe(234000);
});

test("throws an error if the argument is not a number", () => {
  expect(() => secondsToMilliseconds("1")).toThrow();
  expect(() => secondsToMilliseconds(true)).toThrow();
  expect(() => secondsToMilliseconds(null)).toThrow();
  expect(() => secondsToMilliseconds(undefined)).toThrow();
  expect(() => secondsToMilliseconds({})).toThrow();
  expect(() => secondsToMilliseconds([])).toThrow();
});
