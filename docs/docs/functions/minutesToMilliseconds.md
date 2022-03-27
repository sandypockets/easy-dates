---
sidebar_label: minutesToMilliseconds()
---

# `minutesToMilliseconds()`
Returns the number of years equal to the given number of months.

## Usage
```javascript
import { minutesToMilliseconds } from 'easy-dates';

minutesToMilliseconds(minutes);
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## Examples
```javascript
minutesToMilliseconds(1); // 60000
```

```javascript
minutesToMilliseconds(0.5); // 30000
```