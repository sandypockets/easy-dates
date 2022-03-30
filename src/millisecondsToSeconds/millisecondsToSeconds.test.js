const { millisecondsToSeconds } = require("../../dist");

test("it returns a number type", () => {
  expect(typeof millisecondsToSeconds(1000)).toBe("number");
});

test("it returns 1 for every 1000 milliseconds given", () => {
  expect(millisecondsToSeconds(1000)).toBe(1);
  expect(millisecondsToSeconds(2000)).toBe(2);
  expect(millisecondsToSeconds(3000)).toBe(3);
});

test("it throws an error if given a non-number", () => {
  expect(() => millisecondsToSeconds("1000")).toThrow();
  expect(() => millisecondsToSeconds(true)).toThrow();
  expect(() => millisecondsToSeconds(null)).toThrow();
  expect(() => millisecondsToSeconds(undefined)).toThrow();
  expect(() => millisecondsToSeconds({})).toThrow();
  expect(() => millisecondsToSeconds([])).toThrow();
});
