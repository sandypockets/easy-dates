const { monthsToQuarters } = require("../../dist");

test("it returns a number when given a number", () => {
  expect(typeof monthsToQuarters(1)).toBe("number");
});

test("it returns 1 quarter for every 3 months given", () => {
  expect(monthsToQuarters(3)).toBe(1);
  expect(monthsToQuarters(6)).toBe(2);
  expect(monthsToQuarters(9)).toBe(3);
  expect(monthsToQuarters(12)).toBe(4);
});

test("it throws an error when given a non-number", () => {
  expect(() => monthsToQuarters("1")).toThrow();
  expect(() => monthsToQuarters(true)).toThrow();
  expect(() => monthsToQuarters(null)).toThrow();
  expect(() => monthsToQuarters(undefined)).toThrow();
  expect(() => monthsToQuarters({})).toThrow();
  expect(() => monthsToQuarters([])).toThrow();
});
