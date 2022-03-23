export function unixToDate(unixTimeStamp, locale) {
  let output;
  if (locale) {
    output = new Date(unixTimeStamp * 1000).toLocaleString(locale);
  } else {
    output = new Date(unixTimeStamp * 1000);
  }
  return output;
}
