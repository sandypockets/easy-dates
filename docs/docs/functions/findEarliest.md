---
sidebar_label: "findEarliest()"
---

# `findEarliest()`
Returns the earliest date from an array of dates, in milliseconds.

## Usage
```javascript
import { findEarliest } from 'easy-dates';

findEarliest(array)
```

## Prop types
Takes an array of dates, or array of dates as milliseconds.

| props   | type  | required | default |
|---------|-------|----------|---------|
| `array` | Array | yes      | n/a     |

## Examples

```javascript title="returning milliseconds"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
findEarliest([today, tomorrow]) // returns today's date in milliseconds
```

```javascript title="convert milliseconds to date"
const today = new Date();
const tomorrow = new Date(today.getTime() + 86400000);
const latestDate = findEarliest([today, tomorrow]) // 1648513095866
new Date(latestDate) // Sun Mar 27 2022 20:18:22 GMT-0400 (Eastern Daylight Time)
```