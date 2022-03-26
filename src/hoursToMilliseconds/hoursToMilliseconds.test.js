const { hoursToMilliseconds } = require("../../dist");

test("hoursToMilliseconds(1)", () => {
  expect(hoursToMilliseconds(1)).toBe(3600000);
});
test("should accept a number as a string", () => {
  expect(hoursToMilliseconds("1")).toBe(3600000);
});
test("should throw an error if the argument is not a number", () => {
  expect(() => hoursToMilliseconds("a")).toThrow();
  expect(() => hoursToMilliseconds(true)).toThrow();
  expect(() => hoursToMilliseconds(null)).toThrow();
  expect(() => hoursToMilliseconds(undefined)).toThrow();
  expect(() => hoursToMilliseconds({})).toThrow();
  expect(() => hoursToMilliseconds([])).toThrow();
});
