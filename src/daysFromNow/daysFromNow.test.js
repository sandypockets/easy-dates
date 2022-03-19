const { daysFromNow } = require("../../dist");

const oneDay = 86400000;
const currentDate = new Date(Date.now()).getTime();

test("one day from now to be tomorrow", () => {
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-CA");
  expect(daysFromNow(1, "en-CA")).toBe(asDate);
});

test("seven days from now to be a week", () => {
  const asDate = new Date(currentDate + oneDay * 7).toLocaleString("en-CA");
  expect(daysFromNow(7, "en-CA")).toBe(asDate);
});

test("it can accept a string", () => {
  const asDate = new Date(currentDate + oneDay * 7).toLocaleString("en-CA");
  expect(daysFromNow("7", "en-CA")).toBe(asDate);
});

test("it can accept a decimal", () => {
  const asDate = new Date(currentDate + oneDay * 1.5).toLocaleString("en-CA");
  expect(daysFromNow(1.5, "en-CA")).toBe(asDate);
});

test("it can omit the locale argument", () => {
  expect(daysFromNow(1)).toStrictEqual(
    new Date(new Date(Date.now()).getTime() + oneDay)
  );
});

test("it can accept various locales", () => {
  const asDate = new Date(currentDate + oneDay).toLocaleString("en-UK");
  expect(daysFromNow(1, "en-UK")).toBe(asDate);
});
