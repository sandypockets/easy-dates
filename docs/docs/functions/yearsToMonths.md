---
sidebar_label: yearsToMonths()
---

# `yearsToMonths()`
Returns the number of months equal to the given number of years.

## Usage
```javascript
import { yearsToMonths } from 'easy-dates';

yearsToMonths(years);
```

## Prop types

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## Examples
```javascript
yearsToMonths(1); // 12
```

```javascript
yearsToMonths(2.5); // 30
```

```javascript
yearsToMonths('1'); // Error
```