const { millisecondsToHours } = require("../../dist");

test("should return 0 when given 0", () => {
  expect(millisecondsToHours(0)).toBe(0);
});

test("should return 1 when given 3600000", () => {
  expect(millisecondsToHours(3600000)).toBe(1);
});

test("should throw an error when given a non-number", () => {
  expect(() => millisecondsToHours("not a number")).toThrow();
});
