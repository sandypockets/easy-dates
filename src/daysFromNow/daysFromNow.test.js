const { daysFromNow } = require("../../dist");

const oneDay = 86400000;

test("one day from now to be tomorrow", () => {
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-CA");
  expect(daysFromNow(1, "en-CA")).toBe(asDate);
});

test("seven days from now should be a week from today", () => {
  const multiplier = 7;
  const today = new Date();
  const expectedDate = new Date(today.setDate(today.getDate() + multiplier));
  const resultDate = new Date(daysFromNow(multiplier)).toDateString();
  const expectedDateString = expectedDate.toDateString();
  expect(resultDate).toBe(expectedDateString);
});

test("it can accept a string", () => {
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay * 7).toLocaleString("en-CA");
  expect(daysFromNow("7", "en-CA")).toBe(asDate);
});

test("it can accept a decimal", () => {
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay * 1.5).toLocaleString("en-CA");
  expect(daysFromNow(1.5, "en-CA")).toBe(asDate);
});

test("it can omit the second argument (locale)", () => {
  expect(daysFromNow(1)).toStrictEqual(
    new Date(new Date(Date.now()).getTime() + oneDay)
  );
});

test("it can accept locales other than en-CA", () => {
  const currentDate = new Date(Date.now()).getTime();
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-UK");
  expect(daysFromNow(1, "en-UK")).toBe(asDate);
});
