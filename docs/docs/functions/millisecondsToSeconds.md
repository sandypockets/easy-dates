---
sidebar_label: millisecondsToSeconds()
---

# `millisecondsToSeconds()`
Returns the number of seconds equal to the given number of milliseconds.

## Usage
```javascript
import { millisecondsToSeconds } from 'easy-dates';

millisecondsToSeconds(milliseconds);
```

## Prop types

| prop           | type     | required | default  |
|----------------|----------|----------|----------|
| `milliseconds` | `number` | yes      | `null`   |

## Examples
```javascript
millisecondsToSeconds(1000); // 1
```

```javascript
millisecondsToSeconds(60000); // 60
```

```javascript
millisecondsToSeconds('60000'); // Error
```