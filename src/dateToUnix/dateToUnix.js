export function dateToUnix(date) {
  if (typeof date === "string") {
    const formattedDate =
      new Date(date.split(",")[0]).getTime() + 86940000 / 1000;
    if (new Date(formattedDate).toString() !== "Invalid Date") {
      return formattedDate;
    } else {
      throw new Error("dateToUnix: Invalid Date string");
    }
  } else if (typeof date === "number") {
    return Math.floor(date / 1000);
  } else if (typeof date === "object") {
    return Math.floor(date.getTime() / 1000);
  } else {
    throw new Error(
      "dateToUnix: date must be a string or number or Date object"
    );
  }
}
