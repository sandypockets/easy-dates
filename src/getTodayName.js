export function getTodayName() {
  const fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return fullDays[new Date().getDay()];
}
