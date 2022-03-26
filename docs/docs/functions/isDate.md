---
sidebar_label: isDate()
---

# `isDate()`
Returns a boolean, `false` if the first date is after the second date.

## Usage
```javascript
import { isDate } from 'easy-dates'

isDate(date)
```

## Prop types
| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## Examples
```javascript
isDate(new Date('2022-01-01')) // true
```

```javascript
isDate(`${new Date('2022-01-01')}`) // false
```

```javascript
isDate('2022-01-02') // false
```