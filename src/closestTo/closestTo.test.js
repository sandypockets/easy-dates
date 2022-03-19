const { closestTo } = require("../../dist");

const oneDay = 86400000;
const oneWeek = oneDay * 7;

test("tomorrow is closest to today", () => {
  const today = new Date(Date.now());
  const tomorrow = new Date(Date.now() + oneDay);
  const dayAfterTomorrow = new Date(Date.now() + oneDay * 2);
  const weekAfterTomorrow = new Date(Date.now() + oneDay * 7);
  const argumentsArray = [tomorrow, dayAfterTomorrow, weekAfterTomorrow];

  const expectedResult = {
    closest: tomorrow,
    closestIndex: 0,
    difference: oneDay,
  };
  expect(closestTo(today, argumentsArray)).toStrictEqual(expectedResult);
});

test("next week is closer than next month", () => {
  const today = new Date(Date.now());
  const weekAfterTomorrow = new Date(Date.now() + oneWeek);
  const monthAfterTomorrow = new Date(Date.now() + oneDay * 30);
  const twoMonthsAfterTomorrow = new Date(Date.now() + oneDay * 60);
  const argumentsArray = [
    monthAfterTomorrow,
    weekAfterTomorrow,
    twoMonthsAfterTomorrow,
  ];

  const expectedResult = {
    closest: weekAfterTomorrow,
    closestIndex: 1,
    difference: oneWeek,
  };
  expect(closestTo(today, argumentsArray)).toStrictEqual(expectedResult);
});
