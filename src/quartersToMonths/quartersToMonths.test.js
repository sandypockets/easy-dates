const { quartersToMonths } = require("../../dist");

test("it returns a number", () => {
  expect(typeof quartersToMonths(1)).toBe("number");
});

test("it returns the correct number of months", () => {
  expect(quartersToMonths(1)).toBe(3);
  expect(quartersToMonths(2)).toBe(6);
  expect(quartersToMonths(3)).toBe(9);
  expect(quartersToMonths(4)).toBe(12);
});

test("it throws an error if the input is not a number", () => {
  expect(() => quartersToMonths("1")).toThrow();
  expect(() => quartersToMonths(true)).toThrow();
  expect(() => quartersToMonths(null)).toThrow();
  expect(() => quartersToMonths(undefined)).toThrow();
  expect(() => quartersToMonths({})).toThrow();
  expect(() => quartersToMonths([])).toThrow();
});
