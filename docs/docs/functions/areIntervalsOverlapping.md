---
sidebar_label: areIntervalsOverlapping()
---

# `areIntervalsOverlapping()`
Returns a boolean representing whether two date ranges have any overlap. 

## Usage
```javascript
import { areIntervalsOverlapping } from 'easy-dates';

areIntervalsOverlapping(rangeOne, rangeTwo);
```

## Prop types
The function accepts two arrays. Each array should contain two dates, forming a range.


| prop       | type    | required | default   |
|------------|---------|----------|-----------|
| `rangeOne` | `Array` | yes      | `null`    |
| `rangeTwo` | `Array` | yes      | `null`    |

:::info
_Within_ each array (i.e. `rangeOne`), the first date must be before the second date. 

#### Example
```javascript
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);

// The earlier date must be first
const rangeOne = [today, tomorrow]; // Do this
const rangeTwo = [tomorrow, today]; // Don't do this

// If the arrays above are in the correct order, then the order of arguments doesn't matter
areIntervalsOverlapping(rangeOne, rangeTwo) // Do this
areIntervalsOverlapping(rangeTwo, rangeOne) // or do this
```
:::

## Examples
```javascript
const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);
const nextWeek = new Date(Date.now() + oneDay * 7);

const rangeOne = [today, nextWeek];
const rangeTwo = [tomorrow, nextWeek];

areIntervalsOverlapping(rangeOne, rangeTwo) // true
```

```javascript
const oneDay = 24 * 60 * 60 * 1000;
const today = new Date(Date.now());
const nextWeek = new Date(Date.now() + oneDay * 7);

const rangeOne = [today, nextWeek];

const twoWeeks =  new Date(Date.now() + oneDay * 14);
const threeWeeks =  new Date(Date.now() + oneDay * 21);

const rangeThree = [twoWeeks, threeWeeks]

areIntervalsOverlapping(rangeOne, rangeThree) // false
```