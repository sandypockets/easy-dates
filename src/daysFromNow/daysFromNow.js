export function daysFromNow(multiplier, locale) {
  const twentyFourHours = Number(86400000);
  let output;
  if (locale?.length > 0) {
    output = new Date(
      Date.now() + Number(multiplier) * Number(twentyFourHours)
    ).toLocaleString(locale);
  } else {
    output = new Date(
      Date.now() + Number(multiplier) * Number(twentyFourHours)
    );
  }
  return output;
}
