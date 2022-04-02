const { dateNowUnix } = require("../../dist");

test("returns a number", () => {
  expect(typeof dateNowUnix()).toBe("number");
});

test("returns the current date in seconds", () => {
  const now = new Date();
  const nowUnix = Math.floor(now.getTime() / 1000);
  expect(dateNowUnix()).toBe(nowUnix);
});
