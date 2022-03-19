const { getDaysInMonth } = require("../../dist");

test("the number of days in february 2022 when provided a string", () => {
  expect(getDaysInMonth(2022, "feb")).toBe(28);
});
test("the number of days in february 2022 when provided a number", () => {
  expect(getDaysInMonth(2022, 1)).toBe(28);
});
test("the number of days in march 2022 when provided a string", () => {
  expect(getDaysInMonth(2022, "march")).toBe(31);
});
test("the number of days in march 2022 when provided a number", () => {
  expect(getDaysInMonth(2022, 2)).toBe(31);
});
