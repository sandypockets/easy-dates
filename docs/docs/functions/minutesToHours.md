---
sidebar_label: minutesToHours()
---

# `minutesToHours()`
Returns the number of hours from a given number of minutes.

## Usage
```javascript
import { minutesToHours } from 'easy-dates';

minutesToHours(minutes)
```

## Prop types

| prop      | type     | required | default  |
|-----------|----------|----------|----------|
| `minutes` | `number` | yes      | `null`   |

## Examples
```javascript
minutesToHours(30); // 0.5
```

```javascript
minutesToHours(60); // 1
```

```javascript
minutesToHours("some string"); // throw error
```