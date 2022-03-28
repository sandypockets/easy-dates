const { findEarliest } = require("../../dist");

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

test("returns the date in milliseconds", () => {
  expect(findEarliest([today, tomorrow])).toBe(tomorrow.getTime());
});

test("throws an error if no dates are passed", () => {
  expect(() => findEarliest()).toThrow();
});

test("throws an error when passed an array of only one date", () => {
  expect(() => findEarliest([new Date()])).toThrow();
});

test("throws an error when passed an array of strings", () => {
  expect(() => findEarliest([`${today}`, `${tomorrow}`])).toThrow();
});

test("accepts dates as milliseconds", () => {
  expect(findEarliest([today.getTime(), tomorrow.getTime()])).toBe(
    tomorrow.getTime()
  );
});

test("accepts dates as date objects", () => {
  expect(findEarliest([today, tomorrow])).toBe(tomorrow.getTime());
});
