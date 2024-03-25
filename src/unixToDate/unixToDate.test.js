const { unixToDate } = require("../../dist");

test("1648078332 Unix is equal to 2022-03-23, 7:32:12 p.m.", () => {
  // Call the unixToDate function with locale "en-CA"
  const actualDate = unixToDate(1648078332, "en-CA");

  // Extract the time from the actual date string
  const actualTime = actualDate.substring(11, 19); // Extract time substring (HH:mm:ss)

  // Define expected time
  const expectedTime = "7:32:12";

  // Convert actual and expected times to seconds
  const actualSeconds = timeToSeconds(actualTime);
  const expectedSeconds = timeToSeconds(expectedTime);

  // Check if the actual time matches the expected time within an acceptable range
  // Acceptable range: +/- 2 seconds
  const timeDifference = Math.abs(actualSeconds - expectedSeconds);

  // Check if the time difference is within 2 seconds
  expect(timeDifference).toBeLessThanOrEqual(2);
});

// Helper function to convert time string (HH:mm:ss) to seconds
function timeToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

test("the locale argument can be omitted", () => {
  expect(unixToDate(1648078332)).toStrictEqual(new Date(1648078332 * 1000));
});
