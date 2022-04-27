import { getMonthIndex } from "../getMonthIndex/getMonthIndex";

const monthNames = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  fr: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
};

export function getMonthName(locale, index, short = false) {
  if (typeof locale !== "string" && typeof locale !== "undefined") {
    throw new Error("getMonthName: locale must be a string");
  } else {
    locale = locale || "en";
  }
  if (typeof index !== "number" && typeof index !== "undefined") {
    throw new Error("getMonthName: index must be a number");
  }
  if (typeof short !== "boolean") {
    throw new Error("getMonthName: size must be a boolean. Defaults to false.");
  }

  if (index !== undefined && index !== null) {
    if (index === -1) {
      index = 11;
    }
    if (short) {
      return monthNames[locale][index].substring(0, 3);
    } else {
      return monthNames[locale][index];
    }
  } else {
    if (short) {
      const currentIndex = getMonthIndex("current");
      return monthNames[locale][currentIndex].substring(0, 3);
    } else {
      const currentIndex = getMonthIndex("current");
      return monthNames[locale][currentIndex];
    }
  }
}
