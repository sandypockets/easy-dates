const { areIntervalsOverlapping } = require("../../dist");

const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);
const nextWeek = new Date(Date.now() + oneDay * 7);
const rangeOne = [today, nextWeek];
const rangeTwo = [tomorrow, nextWeek];

test("returns a boolean", () => {
  expect(typeof areIntervalsOverlapping(rangeOne, rangeOne)).toBe("boolean");
});

test("returns true if the two ranges overlap", () => {
  expect(areIntervalsOverlapping(rangeOne, rangeTwo)).toBe(true);
});

test("it throws an error when given fewer number of arguments", () => {
  expect(() => areIntervalsOverlapping(rangeOne)).toThrow();
});

test("it does not throw an error when given too many arguments", () => {
  expect(() =>
    areIntervalsOverlapping(rangeOne, rangeTwo, rangeTwo, rangeTwo)
  ).not.toThrow();
});

test("it returns true when given equal date ranges", () => {
  expect(areIntervalsOverlapping(rangeOne, rangeOne)).toBe(true);
});

test("it returns false when given date ranges that do not overlap", () => {
  const rangeThree = [
    new Date(Date.now() + oneDay * 14),
    new Date(Date.now() + oneDay * 24),
  ];
  expect(areIntervalsOverlapping(rangeOne, rangeThree)).toBe(false);
});
