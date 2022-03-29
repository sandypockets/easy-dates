---
sidebar_label: monthsToQuarters()
---

# `monthsToQuarters()`
Returns the number of quarters equal to the given number of months. There are 3 months in a quarter.

## Usage
```javascript
import { monthsToQuarters } from 'easy-dates';

monthsToQuarters(months);
```

## Prop types

| prop     | type     | required | default  |
|----------|----------|----------|----------|
| `months` | `number` | yes      | `null`   |

## Examples
```javascript
monthsToQuarters(3); // 1
```

```javascript
monthsToQuarters(12); // 4
```

```javascript
monthsToQuarters('3'); // Error
```