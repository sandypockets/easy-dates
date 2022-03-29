---
sidebar_label: secondsToHours()
---

# `secondsToHours()`
Returns the number of hours equal to the given number of seconds. There are 3600 seconds in an hour.

## Usage
```javascript
import { secondsToHours } from 'easy-dates';

secondsToHours(seconds);
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## Examples
```javascript
secondsToHours(3600); // 1
```

```javascript
secondsToHours(1800); // 0.5
```

```javascript
secondsToHours('60'); // Error
```