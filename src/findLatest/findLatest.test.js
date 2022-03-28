const { findLatest } = require("../../dist");

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

test("returns the date in milliseconds", () => {
  expect(findLatest([today, tomorrow])).toBe(tomorrow.getTime());
});

test("throws an error if no dates are passed", () => {
  expect(() => findLatest()).toThrow();
});

test("throws an error when passed an array of only one date", () => {
  expect(() => findLatest([new Date()])).toThrow();
});

test("throws an error when passed an array of strings", () => {
  expect(() => findLatest([`${today}`, `${tomorrow}`])).toThrow();
});

test("accepts dates as milliseconds", () => {
  expect(findLatest([today.getTime(), tomorrow.getTime()])).toBe(
    tomorrow.getTime()
  );
});

test("accepts dates as date objects", () => {
  expect(findLatest([today, tomorrow])).toBe(tomorrow.getTime());
});
