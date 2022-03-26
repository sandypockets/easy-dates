const { getDuration } = require("../../dist");

const firstDate = new Date("December 17, 1995 03:24:00");
const secondDate = new Date("December 17, 2000 03:24:00");

test("the difference between 1995 and 2000 is 2,630,880 minutes", () => {
  expect(getDuration(firstDate, secondDate, "minutes")).toBe(2630880);
});
test("the difference between 1995 and 2000 is 43,000 hours", () => {
  expect(getDuration(firstDate, secondDate, "hours")).toBe(43848);
});

test("the difference between 1995 and 2000 is 1825 days", () => {
  expect(getDuration(firstDate, secondDate, "days")).toBe(1827);
});
test("the difference between 1995 and 2000 is 260.28 weeks", () => {
  expect(getDuration(firstDate, secondDate, "weeks")).toBeGreaterThan(260);
  expect(getDuration(firstDate, secondDate, "weeks")).toBeLessThan(261);
});
test("the difference between 1995 and 2000 is 60.06 months", () => {
  expect(getDuration(firstDate, secondDate, "months")).toBeGreaterThan(60);
  expect(getDuration(firstDate, secondDate, "months")).toBeLessThan(61);
});
test("the difference between 1995 and 2000 is 5 years", () => {
  expect(getDuration(firstDate, secondDate, "years")).toBeCloseTo(5, 1);
});

test("defaults to days when a measure is no provided", () => {
  expect(getDuration(firstDate, secondDate)).toBe(1827);
});
