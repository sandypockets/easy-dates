const { getTodayName } = require("../../dist");

test("a lowercase string of the day's name", () => {
  const currentDate = new Date(Date.now()).getDay();
  let dayName;
  switch (currentDate) {
    case 0:
      dayName = "sunday";
      break;
    case 1:
      dayName = "monday";
      break;
    case 2:
      dayName = "tuesday";
      break;
    case 3:
      dayName = "wednesday";
      break;
    case 4:
      dayName = "thursday";
      break;
    case 5:
      dayName = "friday";
      break;
    case 6:
      dayName = "saturday";
      break;
    default:
      dayName = "error with current date in test";
  }

  expect(getTodayName()).toBe(dayName);
});
