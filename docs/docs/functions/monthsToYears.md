---
sidebar_label: monthsToYears()
---

# `monthsToYears()`
Returns the number of years equal to the given number of months.

## Usage
```javascript
import { monthsToYears } from 'easy-dates';

monthsToYears(months);
```

## Prop types

| prop     | type     | required | default  |
|----------|----------|----------|----------|
| `months` | `number` | yes      | `null`   |

## Examples
```javascript
monthsToYears(12); // 1
```

```javascript
monthsToYears(6); // 0.5
```

```javascript
monthsToYears(24); // 2
```