---
sidebar_label: secondsToMilliseconds()
---

# `secondsToMilliseconds()`
Returns the number of milliseconds equal to the given number of seconds.

## Usage
```javascript
import { secondsToMilliseconds } from 'easy-dates';

secondsToMilliseconds(seconds);
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## Examples
```javascript
secondsToMilliseconds(1); // 1000
```

```javascript
secondsToMilliseconds(60); // 60000
```

```javascript
secondsToMilliseconds('60'); // Error
```