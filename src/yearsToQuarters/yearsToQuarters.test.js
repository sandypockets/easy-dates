const { yearsToQuarters } = require("../../dist");

test("it returns number type", () => {
  expect(typeof yearsToQuarters(1)).toBe("number");
});

test("returns 4 quarters for each given year", () => {
  expect(yearsToQuarters(1)).toBe(4);
  expect(yearsToQuarters(2)).toBe(8);
  expect(yearsToQuarters(3)).toBe(12);
  expect(yearsToQuarters(7)).toBe(28);
  expect(yearsToQuarters(12)).toBe(48);
});

test("throws an error when given a non-number", () => {
  expect(() => yearsToQuarters("1")).toThrow();
  expect(() => yearsToQuarters(true)).toThrow();
  expect(() => yearsToQuarters(null)).toThrow();
  expect(() => yearsToQuarters(undefined)).toThrow();
  expect(() => yearsToQuarters([])).toThrow();
  expect(() => yearsToQuarters({})).toThrow();
});
