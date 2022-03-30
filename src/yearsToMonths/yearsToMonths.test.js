const { yearsToMonths } = require("../../dist");

test("it returns a number type", () => {
  expect(typeof yearsToMonths(1)).toBe("number");
});

test("it returns 12 months for every given year", () => {
  expect(yearsToMonths(0.5)).toBe(6);
  expect(yearsToMonths(1)).toBe(12);
  expect(yearsToMonths(2)).toBe(24);
});

test("it throws an error when given a non-number", () => {
  expect(() => yearsToMonths("1")).toThrow();
  expect(() => yearsToMonths(true)).toThrow();
  expect(() => yearsToMonths(null)).toThrow();
  expect(() => yearsToMonths(undefined)).toThrow();
  expect(() => yearsToMonths({})).toThrow();
  expect(() => yearsToMonths([])).toThrow();
});
