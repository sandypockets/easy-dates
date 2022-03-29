const { secondsToMinutes } = require("../../dist");

test("returns a number type", () => {
  expect(typeof secondsToMinutes(1)).toBe("number");
});

test("returns the correct number of minutes", () => {
  expect(secondsToMinutes(60)).toBe(1);
  expect(secondsToMinutes(3600)).toBe(60);
});

test("throws an error when given a non-number", () => {
  expect(() => secondsToMinutes("1")).toThrow();
  expect(() => secondsToMinutes(null)).toThrow();
  expect(() => secondsToMinutes(undefined)).toThrow();
  expect(() => secondsToMinutes({})).toThrow();
  expect(() => secondsToMinutes([])).toThrow();
});
