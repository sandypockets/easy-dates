const { quartersToYears } = require("../../dist");

test("it returns a number type", () => {
  expect(typeof quartersToYears(1)).toBe("number");
});

test("it returns the correct value", () => {
  expect(quartersToYears(1)).toBe(0.25);
  expect(quartersToYears(2)).toBe(0.5);
  expect(quartersToYears(3)).toBe(0.75);
  expect(quartersToYears(4)).toBe(1);
});

test("throw an error if the input is not a number", () => {
  expect(() => quartersToYears("1")).toThrow();
  expect(() => quartersToYears(true)).toThrow();
  expect(() => quartersToYears(null)).toThrow();
  expect(() => quartersToYears(undefined)).toThrow();
  expect(() => quartersToYears({})).toThrow();
  expect(() => quartersToYears([])).toThrow();
});
