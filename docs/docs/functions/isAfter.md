---
sidebar_label: isAfter()
---

# `isAfter()`
Returns a boolean, `true` if the first date is after the second date.

## Usage
```javascript
import { isAfter } from 'easy-dates'

isAfter(date, dateToCompare)
```

## Prop types
| prop            | type   | required | description              |
|-----------------|--------|----------|--------------------------|
| `date`          | `date` | yes      | The date to compare      |
| `dateToCompare` | `date` | yes      | The date to compare with |

## Examples
```javascript
isAfter(new Date('2022-01-01'), new Date('2022-01-02')) // true
```

```javascript
isAfter(new Date('2022-01-01'), new Date('2022-01-01')) // false
```

```javascript
isAfter(new Date('2022-01-02'), new Date('2022-01-01')) // false
```

```javascript
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
isAfter(tomorrow.toString(), today) // error
```