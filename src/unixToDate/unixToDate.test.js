const { unixToDate } = require("../../dist");

test("1648078332 Unix is equal to 2022-03-23, 7:32:12 p.m.", () => {
  expect(unixToDate(1648078332, "en-CA")).toBe("2022-03-23, 7:32:12 p.m.");
});

test("the locale argument can be omitted", () => {
  expect(unixToDate(1648078332)).toStrictEqual(new Date(1648078332 * 1000));
});
