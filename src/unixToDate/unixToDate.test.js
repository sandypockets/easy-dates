const { unixToDate } = require("../../dist");

test("1648078332 Unix is equal to 2022-03-23, 7:32:12 p.m.", () => {
  const actualDate = unixToDate(1648078332, "en-CA");
  const actualTime = actualDate.substring(11, 19); // Extract time substring (HH:mm:ss)
  const expectedTime = "7:32:12";
  expect(actualTime.trim()).toBe(expectedTime);
});

test("the locale argument can be omitted", () => {
  expect(unixToDate(1648078332)).toStrictEqual(new Date(1648078332 * 1000));
});
