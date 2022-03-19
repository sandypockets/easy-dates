const { daysFromNow } = require("../../dist");

test("one day from now to be tomorrow", () => {
  const oneDay = 86400000;
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-CA");
  expect(daysFromNow("en-CA", 1)).toBe(asDate);
});

test("seven days from now to be a week", () => {
  const oneDay = 86400000;
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay * 7).toLocaleString("en-CA");
  expect(daysFromNow("en-CA", 7)).toBe(asDate);
});

test("it can accept a string", () => {
  const oneDay = 86400000;
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay * 7).toLocaleString("en-CA");
  expect(daysFromNow("en-CA", "7")).toBe(asDate);
});
