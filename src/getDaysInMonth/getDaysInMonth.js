export function getDaysInMonth(monthIndex, year) {
  let month = Number();
  const monthObj = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  if (
    typeof year === "string" ||
    typeof monthIndex === "string" ||
    (!monthIndex && !year)
  ) {
    if (
      monthIndex?.toString().toLowerCase() === "current" ||
      year?.toString().toLowerCase() === "current" ||
      (!monthIndex && !year)
    ) {
      !year ? (year = new Date().getFullYear()) : year;
      month = new Date().getMonth();
    } else {
      let firstThree = String();
      if (monthIndex.length > 3) {
        firstThree = monthIndex.toString().toLowerCase().slice(0, 3);
      } else {
        firstThree = monthIndex;
      }
      month = monthObj[firstThree];
    }
  } else {
    month = Number(monthIndex);
  }
  return 32 - new Date(year, month, 32).getDate();
}
