const { getOverlappingDaysInIntervals } = require("../../dist");

test("returns an array type", () => {
  expect(
    Array.isArray(
      getOverlappingDaysInIntervals(
        [new Date(2022, 0, 1), new Date(2022, 0, 10)],
        [new Date(2022, 0, 2), new Date(2022, 0, 11)]
      )
    )
  ).toBe(true);
});

test("the array contains date type items", () => {
  expect(
    getOverlappingDaysInIntervals(
      [new Date(2022, 0, 1), new Date(2022, 0, 10)],
      [new Date(2022, 0, 2), new Date(2022, 0, 11)]
    ).every((date) => date instanceof Date)
  ).toBe(true);
});

test("it returns the overlapping days", () => {
  expect(
    getOverlappingDaysInIntervals(
      [new Date(2022, 0, 1), new Date(2022, 0, 10)],
      [new Date(2022, 0, 2), new Date(2022, 0, 11)]
    )
  ).toEqual([
    new Date(2022, 0, 2),
    new Date(2022, 0, 3),
    new Date(2022, 0, 4),
    new Date(2022, 0, 5),
    new Date(2022, 0, 6),
    new Date(2022, 0, 7),
    new Date(2022, 0, 8),
    new Date(2022, 0, 9),
    new Date(2022, 0, 10),
  ]);
});

test("throws an error when the one interval is not an array", () => {
  expect(() => {
    getOverlappingDaysInIntervals(new Date(2022, 0, 1), [
      new Date(2022, 0, 2),
      new Date(2022, 0, 11),
    ]);
  }).toThrow();

  expect(() => {
    getOverlappingDaysInIntervals(
      [new Date(2022, 0, 2), new Date(2022, 0, 11)],
      new Date(2022, 0, 1)
    );
  }).toThrow();
});
