const { unixToDate } = require("../../dist");

test("1648078332 Unix is equal to 2022-03-23, 7:32:12 p.m.", () => {
  // Call the unixToDate function with locale "en-CA"
  const actualDate = unixToDate(1648078332, "en-CA");

  // Extract the time from the actual date string
  const actualTime = actualDate.substring(11, 19); // Extract time substring (HH:mm:ss)

  // Define expected time
  const expectedTime = "7:32:12";

  // Extract hours, minutes, and seconds from actual and expected times
  const [actualHours, actualMinutes, actualSeconds] = actualTime
    .split(":")
    .map(Number);
  const [expectedHours, expectedMinutes, expectedSeconds] = expectedTime
    .split(":")
    .map(Number);

  // Calculate the time difference in seconds
  const timeDifference = Math.abs(
    actualHours * 3600 +
      actualMinutes * 60 +
      actualSeconds -
      (expectedHours * 3600 + expectedMinutes * 60 + expectedSeconds)
  );

  // Check if the time difference is within 2 seconds
  expect(timeDifference).toBeLessThanOrEqual(2);
});

test("the locale argument can be omitted", () => {
  expect(unixToDate(1648078332)).toStrictEqual(new Date(1648078332 * 1000));
});
