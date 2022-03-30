---
sidebar_label: yearsToDays()
---

# `yearsToDays()`
Returns the number of days equal to the given number of years.

## Usage
```javascript
import { yearsToDays } from 'easy-dates';

yearsToDays(years);
```

## Prop types

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `years` | `number` | yes      | `null`   |

## Examples
```javascript
yearsToDays(1); // 365
```

```javascript
yearsToDays(3); // 1095
```

```javascript
yearsToDays('3'); // Error
```