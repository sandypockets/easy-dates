---
sidebar_label: "getDaysInMonth()"
---

# `getDaysInMonth()`
Returns the number of days in a given month. Note that month indexes start at 0. If no arguments are provided, it returns data about the current month.

## Usage
```javascript
import { getDaysInMonth } from 'easy-dates';

getDaysInMonth(month, year)
```

## Prop types
The `month` can be a number, representing the index of the month, or can be the name of the month.

| prop      | type             | required | default       |
|-----------|------------------|----------|---------------|
| `year`    | number           | no       | current year  |
| `month  ` | string or number | no       | current month |

## Examples
```javascript title='using two number arguments'
getDaysInMonth(1, 2022) // 28
```

```javascript title='using a string for the month'
getDaysInMonth("feb", 2022) // 28 
```

```javascript title='when no args are used, the current month (Feb) is returned'
getDaysInMonth() // 28 
```