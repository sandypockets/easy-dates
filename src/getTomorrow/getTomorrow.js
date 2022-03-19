export function getTomorrow(locale) {
  const twentyFourHours = Number(86400000);
  if (locale) {
    return new Date(Date.now() + twentyFourHours).toLocaleString(locale);
  } else {
    return new Date(Date.now() + twentyFourHours).toLocaleString("en-CA");
  }
}
