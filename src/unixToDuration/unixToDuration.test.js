const { unixToDuration, getDuration } = require("../../dist");

const firstDate = new Date("December 17, 1995 03:24:00");
const secondDate = new Date("December 17, 2000 03:24:00");

// Returns unix if measure used in seconds
const durationAsUnixTimestamp = getDuration(firstDate, secondDate, "seconds");

test("the difference between 1995 and 2000 is 157,852,800 seconds", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "seconds")).toBe(
    durationAsUnixTimestamp
  );
});
test("the difference between 1995 and 2000 is 2,630,880 minutes", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "minutes")).toBe(2630880);
});
test("the difference between 1995 and 2000 is 1,827 days", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "days")).toBe(1827);
});

test("the difference between 1995 and 2000 is 43848 hours", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "hours")).toBe(43848);
});

test("days will be used when no measure is given", () => {
  expect(unixToDuration(durationAsUnixTimestamp)).toBe(1827);
});

test("the difference between 1995 and 2000 is 260 weeks", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "weeks")).toBe(261);
});

test("the difference between 1995 and 2000 is 260 months", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "months")).toBe(60.9);
});

test("the difference between 1995 and 2000 is 5 years", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "years")).toBeCloseTo(5, 1);
});

test("the difference between 1995 and 2000 is half a decade", () => {
  expect(unixToDuration(durationAsUnixTimestamp, "decades")).toBeCloseTo(
    0.5,
    1
  );
});
