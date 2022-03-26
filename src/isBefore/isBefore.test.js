const { isBefore } = require("../../dist");

test("expect tomorrow to be after today", () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  expect(isBefore(tomorrow, today)).toBe(false);
});

test("expect today to be before tomorrow", () => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  expect(isBefore(today, tomorrow)).toBe(true);
});

test("expect a string to throw an error", () => {
  const today = new Date();
  expect(() => isBefore(today, "tomorrow")).toThrow();
});
