export function dateNow(locale) {
  return new Date(Date.now()).toLocaleString(locale);
}
