---
sidebar_label: 'millisecondsToHours()'
---

# `millisecondsToHours()`
Returns the number of hours from a given number of milliseconds.

### Usage
```javascript
import { millisecondsToHours } from 'easy-dates';

millisecondsToHours(milliseconds);
```

### Prop types

| prop           | type     | required | default |
|----------------|----------|----------|---------|
| `milliseconds` | `number` | yes      | n/a     |

### Examples
```javascript
millisecondsToHours(3600000) // 1
```

```javascript
millisecondsToHours(7200000) // 2
```

