---
sidebar_label: "closestTo()"
---

# `closestTo()`
Given an array of dates, `closestTo()` returns an object containing data of the `compareDate` closest to the `controlDate`.

## Usage
```javascript
import { closestTo } from 'easy-dates';

closestTo(controlDate, compareDate) 
```

The expected output is an `object` with the following properties:

- **`difference`**: the time in _milliseconds_ between the `controlDate` and the date closest in time from the `compareDate` argument. 
- **`closest`**: the date object of the closest date from the `compareDate`. 
- **`closestIndex`**: the index of the closest date in the `compareDate` array.

## Prop types

| prop          | type    | required | default |
|---------------|---------|----------|---------|
| `controlDate` | `date`  | yes      | `null`  |
| `compareDate` | `array` | yes      | `null`  |

## Examples
```javascript title='Compare multiple dates'
const twentyFourHours = 86400000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + twentyFourHours);
const dayAfterTomorrow = new Date(Date.now() + twentyFourHours * 2);
const weekAfterTomorrow = new Date(Date.now() + twentyFourHours * 7);

const argumentsArray = [tomorrow, dayAfterTomorrow, weekAfterTomorrow];

closestTo(today, argumentsArray) // { difference: 85400000, closest: Sat Mar 19 2022 20:26:34 GMT-0400 (Eastern Daylight Time), closestIndex: 0 }
```

```javascript title='Compare a single date'
const twentyFourHours = 86400000;

const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + twentyFourHours);

closestTo(today, [tomorrow]) // { difference: 85400000, closest: Sat Mar 19 2022 20:26:34 GMT-0400 (Eastern Daylight Time), closestIndex: 0 }
```

:::info Comparing a single date?
Don't forget that the `compareDate` must be an array.
:::