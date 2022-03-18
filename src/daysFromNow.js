export function daysFromNow(locale, multiplier) {
  const twentyFourHours = Number(86400000);
  if (locale) {
    return new Date(
      Date.now() + Number(multiplier) * Number(twentyFourHours)
    ).toLocaleString(locale);
  } else {
    return new Date(Date.now() + Number(multiplier) * Number(twentyFourHours));
  }
}
