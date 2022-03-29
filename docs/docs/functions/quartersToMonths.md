---
sidebar_label: quartersToMonths()
---

# `quartersToMonths()`
Returns the number of months equal to the given number of quarters. There are 3 months in a quarter.

## Usage
```javascript
import { quartersToMonths } from 'easy-dates';

quartersToMonths(quarters);
```

## Prop types

| prop       | type     | required | default  |
|------------|----------|----------|----------|
| `quarters` | `number` | yes      | `null`   |

## Examples
```javascript
quartersToMonths(1); // 3
```

```javascript
quartersToMonths(4); // 12
```

```javascript
quartersToMonths('12'); // Error
```