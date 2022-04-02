const { dateToMilliseconds } = require("../../dist");

test("2022-01-01 should return 1640995200000", () => {
  expect(dateToMilliseconds(new Date("2022-01-01"))).toBe(1640995200000);
});

test("throws an error when given a non-date", () => {
  expect(() => {
    dateToMilliseconds("2022-01-01");
  }).toThrow();

  expect(() => {
    dateToMilliseconds(5);
  }).toThrow();

  expect(() => {
    dateToMilliseconds(new Date("2022-01-01"));
  }).not.toThrow();
});
