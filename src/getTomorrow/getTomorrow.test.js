const { getTomorrow } = require("../../dist");

test("expect tomorrow to be exactly 24 hours from today", () => {
  const oneDay = 86400000;
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-CA");
  expect(getTomorrow("en-CA")).toBe(asDate);
});

test("defaults to en-CA when locale argument is not provided", () => {
  const oneDay = 86400000;
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-CA");
  expect(getTomorrow()).toStrictEqual(asDate);
});
