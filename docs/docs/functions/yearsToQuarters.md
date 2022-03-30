---
sidebar_label: yearsToQuarters()
---

# `yearsToQuarters()`
Returns the number of quarters equal to the given number of years.

## Usage
```javascript
import { yearsToQuarters } from 'easy-dates';

yearsToQuarters(years);
```

## Prop types

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## Examples
```javascript
yearsToQuarters(1); // 4
```

```javascript
yearsToQuarters(0.5); // 2
```

```javascript
yearsToQuarters('1'); // Error
```