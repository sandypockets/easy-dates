---
sidebar_label: "getDuration()"
---

# `getDuration()`
Returns a number representing the amount of time between two dates. Since Unix timestamps are in seconds, this function technically returns a Unix timestamp when the `measure` is set to `seconds`.

## Usage
```javascript
import { getDuration } from 'easy-dates';

getDuration(firstDate, secondDate, measure)
```

## Prop types
| prop         | type   | required | default |
|--------------|--------|----------|---------|
| `firstDate`  | any    | yes      | null    |
| `secondDate` | any    | yes      | null    |
| `measure`    | string | yes      | days    |

## Examples
```javascript
const oneDay = 86400000;
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + oneDay);

getDuration(today, tomorrow, 'seconds') // 86400
getDuration(today, tomorrow, 'minutes') // 1440
getDuration(today, tomorrow, 'hours') // 24
getDuration(today, tomorrow, 'days') // 1
getDuration(today, tomorrow, 'weeks') // 0.14246575342465753
getDuration(today, tomorrow, 'months') // 0.03287671232876713
getDuration(today, tomorrow, 'years') // 0.0027397260273972603
```