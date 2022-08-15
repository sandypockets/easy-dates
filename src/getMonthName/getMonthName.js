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
  es: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  pt: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  it: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ],
  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
  ru: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  zh: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]
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
    if (short && locale !== "zh") {
      return monthNames[locale][index].substring(0, 3);
    } else {
      return monthNames[locale][index];
    }
  } else {
    if (short && locale !== "zh") {
      const currentIndex = getMonthIndex("current");
      return monthNames[locale][currentIndex].substring(0, 3);
    } else {
      const currentIndex = getMonthIndex("current");
      return monthNames[locale][currentIndex];
    }
  }
}
