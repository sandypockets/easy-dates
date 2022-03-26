---
sidebar_label: isEqual()
---

# `isEqual`
Returns a boolean, `false` if the first date is after the second date.

## Usage
```javascript
import { isEqual } from 'easy-dates'

isEqual(date, dateToCompare)
```

## Prop types
| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |
| `dateToCompare` | `date` | yes      | n/a     |

## Examples
```javascript
isEqual(new Date('2022-01-01'), new Date('2022-01-01')) // true
```

```javascript
isEqual(new Date(Date.now()), new Date(Date.now())) // true
```

```javascript
isEqual(new Date('2022-01-01'), new Date('2022-01-02')) // false
```

```javascript
isEqual(new Date('2022-01-01')) // false
```

```javascript
isEqual('2022-01-02') // false
```