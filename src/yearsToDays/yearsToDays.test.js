const { yearsToDays } = require("../../dist");

test("returns a number type", () => {
  expect(typeof yearsToDays(1)).toBe("number");
});

test("returns 365 days for each given year", () => {
  expect(yearsToDays(1)).toBe(365);
  expect(yearsToDays(3)).toBe(1095);
  expect(yearsToDays(9)).toBe(3285);
  expect(yearsToDays(10)).toBe(3650);
});

test("throws an error when given a non-number", () => {
  expect(() => yearsToDays("1")).toThrow();
  expect(() => yearsToDays(true)).toThrow();
  expect(() => yearsToDays(null)).toThrow();
  expect(() => yearsToDays(undefined)).toThrow();
  expect(() => yearsToDays([])).toThrow();
  expect(() => yearsToDays({})).toThrow();
});
