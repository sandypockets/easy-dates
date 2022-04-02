---
sidebar_label: getOverlappingDaysInIntervals()
---

# `getOverlappingDaysInIntervals()`
Returns an array of dates representing the days that overlap between two date ranges. 

:::tip
This function returns an array of `Date` objects. If you need something like seconds (Unix timestamp) or milliseconds (JavaScript timestamp), then you can use the [`dateToUnix()`](dateToUnix) or [`dateToMilliseconds()`](dateToMilliseconds) functions.
:::

## Usage
```javascript
import { getOverlappingDaysInIntervals } from 'easy-dates';

getOverlappingDaysInIntervals(rangeOne, rangeTwo);
```

## Prop types
| prop       | type    | required | default   |
|------------|---------|----------|-----------|
| `rangeOne` | `array` | yes      | `null`    |
| `rangeTwo` | `array` | yes      | `null`    |

## Examples
```javascript
getOverlappingDaysInIntervals(
  [new Date(2022, 0, 1), new Date(2022, 0, 10)],
  [new Date(2022, 0, 2), new Date(2022, 0, 11)]
)

// Result
// [
//   new Date(2022, 0, 2),
//   new Date(2022, 0, 3),
//   new Date(2022, 0, 4),
//   new Date(2022, 0, 5),
//   new Date(2022, 0, 6),
//   new Date(2022, 0, 7),
//   new Date(2022, 0, 8),
//   new Date(2022, 0, 9),
//   new Date(2022, 0, 10)
// ]
```

```javascript
getOverlappingDaysInIntervals(
  ["2022, 0, 1", "2022, 0, 10"],
  [new Date(2022, 0, 2), new Date(2022, 0, 11)]
) // Error
```
