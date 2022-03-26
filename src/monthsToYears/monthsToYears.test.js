const { monthsToYears } = require("../../dist");

test("expect 12 months to equal one year", () => {
  expect(monthsToYears(12)).toBe(1);
});

test("expect 24 months to equal two years", () => {
  expect(monthsToYears(24)).toBe(2);
});

test("expect an error if the input is not a number", () => {
  expect(() => monthsToYears("12")).toThrow();
  expect(() => monthsToYears({})).toThrow();
  expect(() => monthsToYears([])).toThrow();
  expect(() => monthsToYears(null)).toThrow();
  expect(() => monthsToYears(undefined)).toThrow();
  expect(() => monthsToYears(true)).toThrow();
  expect(() => monthsToYears(false)).toThrow();
});

test("expect a float if less than 12 months are provided", () => {
  expect(monthsToYears(6)).toBe(0.5);
});
