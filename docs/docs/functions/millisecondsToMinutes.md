---
sidebar_label: 'millisecondsToMinutes()'
---

# `millisecondsToMinutes()`
Returns the number of minutes from a given number of milliseconds.

### Usage
```javascript
import { millisecondsToMinutes } from 'easy-dates';

millisecondsToMinutes(milliseconds);
```

### Prop types

| prop           | type     | required | default |
|----------------|----------|----------|---------|
| `milliseconds` | `number` | yes      | n/a     |

### Examples
```javascript
millisecondsToMinutes(3600000) // 60
```

```javascript
millisecondsToMinutes(7200000) // 120
```

