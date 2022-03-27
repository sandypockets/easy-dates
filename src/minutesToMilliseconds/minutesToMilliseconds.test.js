const { minutesToMilliseconds } = require("../../dist");

test("1 minute is equal to 60000 milliseconds", () => {
  expect(minutesToMilliseconds(1)).toBe(60000);
});

test("it throws an error when given a non-number", () => {
  expect(() => minutesToMilliseconds("a")).toThrow();
  expect(() => minutesToMilliseconds(true)).toThrow();
  expect(() => minutesToMilliseconds(null)).toThrow();
  expect(() => minutesToMilliseconds(undefined)).toThrow();
  expect(() => minutesToMilliseconds([])).toThrow();
  expect(() => minutesToMilliseconds({})).toThrow();
});
