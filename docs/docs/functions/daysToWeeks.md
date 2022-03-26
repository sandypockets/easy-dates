---
sidebar_label: daysToWeeks()
---

# `daysToWeeks()`
Returns the number of weeks equal to the given number of days.

## Usage
```javascript
import { daysToWeeks } from 'easy-dates';

daysToWeeks(days);
```

## Prop types

| prop   | type     | required | default  |
|--------|----------|----------|----------|
| `days` | `number` | yes      | `null`   |

## Examples
```javascript
daysToWeeks(7); // 1
```

```javascript
daysToWeeks(14); // 2
```

```javascript
daysToWeeks(365); // 52.142857142857146
```