const { getYear } = require("../../dist");

test("expect the current year to be 2024", () => {
  expect(getYear()).toBe(2024);
});
