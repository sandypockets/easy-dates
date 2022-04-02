const { dateNowISO } = require("../../dist");

test("returns a string", () => {
  expect(typeof dateNowISO()).toBe("string");
});

test("returns a string with the correct format (ISO)", () => {
  expect(dateNowISO()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
});
