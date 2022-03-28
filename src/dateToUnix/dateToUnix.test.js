const { dateToUnix } = require("../../dist");

const dateObject = new Date(Date.now());

test("converts a date to unix timestamp", () => {
  expect(dateToUnix(dateObject)).toBeGreaterThan(1000000);
});

test("converts a date object to unix timestamp", () => {
  expect(dateToUnix(new Date())).toBeGreaterThan(1000000);
});

test("converts a date string to unix timestamp", () => {
  const dateString = new Date(Date.now()).toLocaleString("en-CA");
  expect(dateToUnix(dateString)).toBeGreaterThan(1000000);
});
test("converts a milliseconds date stamp (number) to a unix date stamp", () => {
  const millisecondsDateStamp = new Date(Date.now()).getTime();
  expect(dateToUnix(millisecondsDateStamp)).toEqual(
    Math.floor(millisecondsDateStamp / 1000)
  );
});
test("returns a whole number and not a float", () => {
  const millisecondsDateStamp = new Date(Date.now()).getTime();
  expect(dateToUnix(millisecondsDateStamp).toString()).not.toMatch(/"."/);
});

test("throws an error if the date is not a valid date", () => {
  expect(() => dateToUnix("not a date")).toThrow();
});
test("throws an error when given an array", () => {
  expect(() => dateToUnix([])).toThrow();
});

test("throws an error when given an object", () => {
  expect(() => dateToUnix({})).toThrow();
});
test("throws an error when given null", () => {
  expect(() => dateToUnix(null)).toThrow();
});
