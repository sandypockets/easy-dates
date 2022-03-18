export function useEasyDates() {
  const fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return function getRequestedDate(dateText, locale, multiplier) {
    const today = new Date();
    const twentyFourHours = Number(86400000);
    switch (dateText) {
      case "todayName":
        return fullDays[today.getDay()];
      case "today":
        return locale
          ? new Date(Date.now()).toLocaleString(locale)
          : new Date(Date.now());
      case "tomorrow":
        if (locale) {
          return new Date(Date.now() + twentyFourHours).toLocaleString(locale);
        } else {
          return new Date(Date.now() + twentyFourHours);
        }
      case "currentMonthIndex":
        return today.getMonth();
      case "currentMonthName":
        return fullMonths[today.getMonth()];
      case "daysInCurrentMonth":
        return (
          32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate()
        );
      case "daysInSpecificMonth":
        return (
          32 - new Date(today.getFullYear(), Number(multiplier), 32).getDate()
        );
      case "currentYear":
        return today.getFullYear();
      case "daysFromNow":
        if (locale) {
          return new Date(
            Date.now() + Number(multiplier) * Number(twentyFourHours)
          ).toLocaleString(locale);
        } else {
          return new Date(
            Date.now() + Number(multiplier) * Number(twentyFourHours)
          );
        }
    }
  };
}
