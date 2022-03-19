export function getDaysInMonth(year, monthIndex) {
  let month = Number();
  if (typeof monthIndex === "string") {
    if (monthIndex.toLowerCase() === "current") {
      month = new Date().getMonth();
    } else {
      const firstThree = monthIndex.slice(0, 3).toLowerCase();
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
      month = monthObj[firstThree];
    }
  } else {
    month = Number(monthIndex);
  }
  return 32 - new Date(year, month, 32).getDate();
}
