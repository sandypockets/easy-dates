const { getYear } = require("../../dist");

test("expect the current year to be 2025", () => {
  expect(getYear()).toBe(2025);
});
