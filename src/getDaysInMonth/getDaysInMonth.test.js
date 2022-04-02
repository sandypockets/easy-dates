const { getDaysInMonth } = require("../../dist");

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();

test("the number of days in february 2022 when provided feb as a string", () => {
  expect(getDaysInMonth("feb", 2022)).toBe(28);
});

test("the number of days in february 2022 when provided a number", () => {
  expect(getDaysInMonth(1, 2022)).toBe(28);
});

test("the number of days in march 2022 when provided a string", () => {
  expect(getDaysInMonth("march", 2022)).toBe(31);
});

test("the number of days in march 2022 when provided a number", () => {
  expect(getDaysInMonth(2, 2022)).toBe(31);
});

test("it accepts 'current' as an argument", () => {
  expect(getDaysInMonth("current", 2022)).toBe(daysInMonth);
});

test("it returns current when no argument is provided", () => {
  expect(getDaysInMonth()).toBe(daysInMonth);
});
