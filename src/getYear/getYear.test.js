const { getYear } = require("../../dist");

test("expect the current year to be 2022", () => {
  expect(getYear()).toBe(2022);
});
