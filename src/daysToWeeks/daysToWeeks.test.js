const { daysToWeeks } = require("../../dist");

test("7 days should equal 1 week", () => {
  expect(daysToWeeks(7)).toBe(1);
});

test("365 days should equal 52 weeks", () => {
  expect(daysToWeeks(365)).toBeCloseTo(52, 0);
});

test("it should throw an error if the number of days is not a number", () => {
  expect(() => daysToWeeks("7")).toThrow();
  expect(() => daysToWeeks(null)).toThrow();
  expect(() => daysToWeeks(undefined)).toThrow();
  expect(() => daysToWeeks({})).toThrow();
  expect(() => daysToWeeks([])).toThrow();
});
