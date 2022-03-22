export function unixToDuration(unixTimestamp, measure) {
  let output;
  switch (measure) {
    case "seconds":
      output = unixTimestamp;
      break;
    case "minutes":
      output = unixTimestamp / 60;
      break;
    case "hours":
      output = unixTimestamp / 3600;
      break;
    case "days":
      output = unixTimestamp / 86400;
      break;
    case "weeks":
      output = unixTimestamp / 604800;
      break;
    case "months":
      output = unixTimestamp / 2592000;
      break;
    case "years":
      output = unixTimestamp / 31449600;
      break;
    case "decades":
      output = unixTimestamp / 314496000;
      break;
    default:
      // Days
      output = unixTimestamp / 86400;
  }
  return output;
}
