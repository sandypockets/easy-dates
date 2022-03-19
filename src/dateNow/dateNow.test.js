const { dateNow } = require("../../dist");

test("the current date is returned in a locale", () => {
  const currentDate = new Date(Date.now()).toLocaleString("en-CA");
  expect(dateNow("en-CA")).toBe(currentDate);
});
