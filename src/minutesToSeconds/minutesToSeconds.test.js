const { minutesToSeconds } = require("../../dist");

test("it returns 60 seconds when given 1 minute", () => {
  expect(minutesToSeconds(1)).toBe(60);
});

test("it throws an error when given a non-number", () => {
  expect(() => minutesToSeconds("1")).toThrow();
  expect(() => minutesToSeconds(true)).toThrow();
  expect(() => minutesToSeconds(null)).toThrow();
  expect(() => minutesToSeconds(undefined)).toThrow();
  expect(() => minutesToSeconds({})).toThrow();
  expect(() => minutesToSeconds([])).toThrow();
  expect(() => minutesToSeconds(new Date())).toThrow();
});
