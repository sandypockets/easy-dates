const { isAfter } = require("../../dist");

test("expect tomorrow to be after today", () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  expect(isAfter(tomorrow, today)).toBe(true);
});

test("expect next week to be after today", () => {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  expect(isAfter(nextWeek, today)).toBe(true);
});

test("expect a string to throw an error", () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  expect(() => isAfter(tomorrow.toString(), today)).toThrow();
});
