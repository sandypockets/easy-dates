---
sidebar_label: secondsToMinutes()
---

# `secondsToMinutes()`
Returns the number of minutes equal to the given number of seconds.

## Usage
```javascript
import { secondsToMinutes } from 'easy-dates';

secondsToMinutes(seconds);
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `seconds` | `number` | yes      | `null`   |

## Examples
```javascript
secondsToMinutes(60); // 1
```

```javascript
secondsToMinutes(3600); // 60
```

```javascript
secondsToMinutes('2'); // Error
```