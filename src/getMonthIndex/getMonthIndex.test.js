const { getMonthIndex } = require("../../dist");

test("index of january to be 0", () => {
  expect(getMonthIndex("january")).toBe(0);
});

test("it accepts a three letter short form", () => {
  expect(getMonthIndex("jan")).toBe(0);
});

test("it returns the current month when provided a 'current' arg", () => {
  const currentMonthIndex = new Date(Date.now()).getMonth();
  expect(getMonthIndex("current")).toBe(currentMonthIndex);
});
