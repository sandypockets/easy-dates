const { millisecondsToMinutes } = require("../../dist");

test("should return 0 minutes if 0 milliseconds", () => {
  expect(millisecondsToMinutes(0)).toBe(0);
});
test("should throw an error if given a non-number", () => {
  expect(() => millisecondsToMinutes("0")).toThrow();
  expect(() => millisecondsToMinutes(null)).toThrow();
  expect(() => millisecondsToMinutes(undefined)).toThrow();
});
