const { getMonthIndex } = require("../../dist");

test("index of january to be 0", () => {
  expect(getMonthIndex("january")).toBe(0);
});
