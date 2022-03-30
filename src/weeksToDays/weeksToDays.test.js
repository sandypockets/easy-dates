const { weeksToDays } = require("../../dist");

test("it returns a number type", () => {
  expect(typeof weeksToDays(1)).toBe("number");
});

test("returns 7 days for each week given", () => {
  expect(weeksToDays(1)).toBe(7);
  expect(weeksToDays(2)).toBe(14);
  expect(weeksToDays(3)).toBe(21);
  expect(weeksToDays(4)).toBe(28);
  expect(weeksToDays(5)).toBe(35);
  expect(weeksToDays(6)).toBe(42);
  expect(weeksToDays(7)).toBe(49);
});

test("returns 0 days for 0 weeks given", () => {
  expect(weeksToDays(0)).toBe(0);
});

test("throws an error when given a negative number", () => {
  expect(() => weeksToDays(-1)).toThrow();
});

test("throws an error when given a non-number", () => {
  expect(() => weeksToDays("1")).toThrow();
  expect(() => weeksToDays(true)).toThrow();
  expect(() => weeksToDays(false)).toThrow();
  expect(() => weeksToDays(null)).toThrow();
  expect(() => weeksToDays(undefined)).toThrow();
  expect(() => weeksToDays({})).toThrow();
  expect(() => weeksToDays([])).toThrow();
});
