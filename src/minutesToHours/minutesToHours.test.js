const { minutesToHours } = require("../../dist");

test("60 minutes equals 1 hour", () => {
  expect(minutesToHours(60)).toBe(1);
});

test("it throws an error if given a non-number", () => {
  expect(() => minutesToHours("a")).toThrow();
  expect(() => minutesToHours(null)).toThrow();
  expect(() => minutesToHours(undefined)).toThrow();
  expect(() => minutesToHours([])).toThrow();
  expect(() => minutesToHours({})).toThrow();
});
