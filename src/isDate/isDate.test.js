const { isDate } = require("../../dist");

test("expect that today's date is a date", () => {
  expect(isDate(new Date())).toBe(true);
});

test("expect that a string is not a date", () => {
  expect(isDate("string")).toBe(false);
});

test("expect that a date formatted as a string is not a date", () => {
  expect(isDate(`${new Date()}`)).toBe(false);
});

test("expect that a number is not a date", () => {
  expect(isDate(1)).toBe(false);
});
