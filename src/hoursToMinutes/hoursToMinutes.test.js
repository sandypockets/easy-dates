const { hoursToMinutes } = require("../../dist");

test("should return 0 if the input is 0", () => {
  expect(hoursToMinutes(0)).toBe(0);
});

test("should return 60 if the input is 1", () => {
  expect(hoursToMinutes(1)).toBe(60);
});

test("should return 120 if the input is 2", () => {
  expect(hoursToMinutes(2)).toBe(120);
});

test("throws an error when given a non-number", () => {
  expect(() => hoursToMinutes("a")).toThrow();
});
