const { secondsToHours } = require("../../dist");

test("returns a number type", () => {
  expect(typeof secondsToHours(1)).toBe("number");
});

test("returns the correct value", () => {
  expect(secondsToHours(3600)).toBe(1);
  expect(secondsToHours(3601)).toBeCloseTo(1.0002);
});

test("throws an error when given a non-number", () => {
  expect(() => secondsToHours("1")).toThrow();
  expect(() => secondsToHours(true)).toThrow();
  expect(() => secondsToHours(null)).toThrow();
  expect(() => secondsToHours(undefined)).toThrow();
  expect(() => secondsToHours({})).toThrow();
  expect(() => secondsToHours([])).toThrow();
});
