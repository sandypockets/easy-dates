export function getMonthIndex(monthName) {
  if (monthName === "current") {
    return new Date().getMonth();
  } else {
    const fullMonths = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    return fullMonths.indexOf(monthName.slice(0, 3).toLowerCase());
  }
}
