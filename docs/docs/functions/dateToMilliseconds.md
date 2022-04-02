---
sidebar_label: dateToMilliseconds()
---

# `dateToMilliseconds()`
Returns the number of milliseconds (JavaScript timestamp) representing a given date. 

## Usage
```javascript
import { dateToMilliseconds } from 'easy-dates';

dateToMilliseconds(date)
```

## Prop types
| prop   | type   | required | default   |
|--------|--------|----------|-----------|
| `date` | `date` | yes      | `null`    |

## Examples
```javascript
dateToMilliseconds(new Date("2022-01-01")) // 1640995200000
```

```javascript
dateToMilliseconds("2022-01-01") // Error
```
