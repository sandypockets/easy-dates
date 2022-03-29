---
sidebar_label: minutesToSeconds()
---

# `minutesToSeconds()`
Returns the number of seconds equal to the given number of minutes.

## Usage
```javascript
import { minutesToSeconds } from 'easy-dates';

minutesToSeconds(minutes);
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## Examples
```javascript
minutesToSeconds(1); // 60
```

```javascript
minutesToSeconds(60); // 3600
```

```javascript
minutesToSeconds('1'); // Error
```