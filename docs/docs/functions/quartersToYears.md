---
sidebar_label: quartersToYears()
---

# `quartersToYears()`
Returns the number of years equal to the given number of quarters. There are 3 months in a quarter.

## Usage
```javascript
import { quartersToYears } from 'easy-dates';

quartersToYears(quarters);
```

## Prop types

| prop       | type     | required | default  |
|------------|----------|----------|----------|
| `quarters` | `number` | yes      | `null`   |

## Examples
```javascript
quartersToYears(4); // 1
```

```javascript
quartersToYears(2); // 0.5
```

```javascript
quartersToYears('6'); // Error
```