const { unixToDate } = require("../../dist");

test("unixToDate without locale returns the correct Date object", () => {
  const unixTimestamp = 1648078332;
  const expectedDate = new Date(unixTimestamp * 1000);
  const actualDate = unixToDate(unixTimestamp);
  expect(actualDate).toStrictEqual(expectedDate);
});

test("unixToDate with locale returns a string", () => {
  const unixTimestamp = 1648078332;
  const locale = "en-CA";
  const actualDate = unixToDate(unixTimestamp, locale);
  expect(typeof actualDate).toBe("string");
});

test("the locale argument can be omitted", () => {
  expect(unixToDate(1648078332)).toStrictEqual(new Date(1648078332 * 1000));
});
