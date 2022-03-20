export function dateToUnix(date) {
  let output;
  switch (typeof date) {
    case "object":
      output = Math.floor(date.getTime() / 1000);
      break;
    case "string":
      output = Math.floor(
        (new Date(date.split(",")[0]).getTime() + 86940000) / 1000
      );
      break;
    case "number":
      output = Math.floor(date / 1000);
      break;
    default:
      output = "Error";
  }
  return output;
}
