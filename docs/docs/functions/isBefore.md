---
sidebar_label: isBefore()
---

# `isBefore()`
Returns a boolean, `false` if the first date is after the second date.

## Usage
```javascript
import { isBefore } from 'easy-dates'

isBefore(date, dateToCompare)
```

## Prop types
| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |
| `dateToCompare` | `date` | yes      | n/a     |

## Examples
```javascript
isBefore(new Date('2022-01-01'), new Date('2022-01-02')) // false
```

```javascript
isBefore(new Date('2022-01-01'), new Date('2022-01-01')) // true
```

```javascript
isBefore(new Date('2022-01-02'), new Date('2022-01-01')) // true
```

```javascript
const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
isBefore(tomorrow.toString(), today) // error when given the wrong type
```