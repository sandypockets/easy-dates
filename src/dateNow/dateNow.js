export function dateNow(locale) {
  let output = String();
  if (locale) {
    output = new Date(Date.now()).toLocaleString(locale);
  } else {
    output = new Date(Date.now()).toLocaleString("en-CA");
  }
  return output;
}
