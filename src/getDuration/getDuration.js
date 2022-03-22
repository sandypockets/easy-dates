import { dateToUnix } from "../dateToUnix/dateToUnix";

export function getDuration(firstDate, secondDate, measure) {
  const oneUnixYear = 31536000;
  const firstDateUnix = dateToUnix(firstDate);
  const secondDateUnix = dateToUnix(secondDate);
  const difference = Math.abs(firstDateUnix - secondDateUnix);
  let output;
  switch (measure) {
    case "seconds":
      output = (difference / oneUnixYear) * 8760 * 60 * 60;
      break;
    case "minutes":
      output = (difference / oneUnixYear) * 8760 * 60;
      break;
    case "hours":
      output = (difference / oneUnixYear) * 8760;
      break;
    case "days":
      output = (difference / oneUnixYear) * 365;
      break;
    case "weeks":
      output = (difference / oneUnixYear) * 52;
      break;
    case "months":
      output = (difference / oneUnixYear) * 12;
      break;
    case "years":
      output = difference / oneUnixYear;
      break;
    default:
      // days
      output = (difference / oneUnixYear) * 365;
  }
  return output;
}
