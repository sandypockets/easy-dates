const { isEqual } = require("../../dist");

test("date now equals date now", () => {
  const date1 = new Date(Date.now());
  const date2 = new Date(Date.now());
  expect(isEqual(date1, date2)).toBe(true);
});

test("today does not equal tomorrow", () => {
  const date1 = new Date();
  const date2 = new Date(date1.getTime() + 24 * 60 * 60 * 1000);
  expect(isEqual(date1, date2)).toBe(false);
});

test("throws an error when given a string", () => {
  const date1 = new Date();
  const date2 = "not a date";
  expect(() => isEqual(date1, date2)).toThrow();
});

test("throws an error when given a number", () => {
  const date1 = new Date();
  const date2 = 123;
  expect(() => isEqual(date1, date2)).toThrow();
});

test("ignores the third argument", () => {
  const date1 = new Date();
  const date2 = new Date();
  expect(isEqual(date1, date2, "ignore")).toBe(true);
});

test("throws an error when given too few arguments", () => {
  const date1 = new Date();
  const date2 = new Date();
  expect(() => isEqual()).toThrow();
  expect(() => isEqual(date1)).toThrow();
});
