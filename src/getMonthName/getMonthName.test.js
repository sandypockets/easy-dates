const { getMonthName } = require("../../dist");

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

test("the correct month names are returned for en locale", () => {
  expect(getMonthName("en", 0)).toBe("January");
  expect(getMonthName("en", 1)).toBe("February");
  expect(getMonthName("en", 2)).toBe("March");
  expect(getMonthName("en", 3)).toBe("April");
  expect(getMonthName("en", 4)).toBe("May");
  expect(getMonthName("en", 5)).toBe("June");
  expect(getMonthName("en", 6)).toBe("July");
  expect(getMonthName("en", 7)).toBe("August");
  expect(getMonthName("en", 8)).toBe("September");
  expect(getMonthName("en", 9)).toBe("October");
  expect(getMonthName("en", 10)).toBe("November");
  expect(getMonthName("en", 11)).toBe("December");
});

test("the correct month names are returned for the fr locale", () => {
  expect(getMonthName("fr", 0)).toBe("Janvier");
  expect(getMonthName("fr", 1)).toBe("Février");
  expect(getMonthName("fr", 2)).toBe("Mars");
  expect(getMonthName("fr", 3)).toBe("Avril");
  expect(getMonthName("fr", 4)).toBe("Mai");
  expect(getMonthName("fr", 5)).toBe("Juin");
  expect(getMonthName("fr", 6)).toBe("Juillet");
  expect(getMonthName("fr", 7)).toBe("Août");
  expect(getMonthName("fr", 8)).toBe("Septembre");
  expect(getMonthName("fr", 9)).toBe("Octobre");
  expect(getMonthName("fr", 10)).toBe("Novembre");
  expect(getMonthName("fr", 11)).toBe("Décembre");
});

test("the locale defaults to en and the current month name is returned when no arguments are passed", () => {
  expect(getMonthName()).toBe(monthNames.en[new Date(Date.now()).getMonth()]);
});

test("getMonthName('en', -1) should return 'December'", () => {
  expect(getMonthName("en", -1)).toBe("December");
});

test("returns a short name if short parameter is true", () => {
  expect(getMonthName("en", 0, true)).toBe("Jan");
  expect(getMonthName("fr", 0, true)).toBe("Jan");
  expect(getMonthName("en", 1, true)).toBe("Feb");
  expect(getMonthName("fr", 1, true)).toBe("Fév");
  expect(getMonthName("en", -1, true)).toBe("Dec");
});

test("throws an error if locale is not a string", () => {
  expect(() => getMonthName(null, 0)).toThrow();
  expect(() => getMonthName(1, 0)).toThrow();
  expect(() => getMonthName(true, 0)).toThrow();
  expect(() => getMonthName(false, 0)).toThrow();
  expect(() => getMonthName([], 0)).toThrow();
  expect(() => getMonthName({}, 0)).toThrow();
});

test("throws an error if index is not a number", () => {
  expect(() => getMonthName("en", "1")).toThrow();
  expect(() => getMonthName("en", null)).toThrow();
  expect(() => getMonthName("en", "")).toThrow();
  expect(() => getMonthName("en", true)).toThrow();
  expect(() => getMonthName("en", false)).toThrow();
  expect(() => getMonthName("en", [])).toThrow();
  expect(() => getMonthName("en", {})).toThrow();
});

test("throws an error if short is not a boolean", () => {
  expect(() => getMonthName("en", 0, "")).toThrow();
  expect(() => getMonthName("en", 0, null)).toThrow();
  expect(() => getMonthName("en", 0, "1")).toThrow();
  expect(() => getMonthName("en", 0, [])).toThrow();
  expect(() => getMonthName("en", 0, {})).toThrow();
});
