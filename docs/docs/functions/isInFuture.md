---
sidebar_label: isInFuture()
---

# `isInFuture`
Returns a boolean, `true` if the given date is in the future. 

## Usage
```javascript
import { isInFuture } from 'easy-dates'

isInFuture(date)
```

## Prop types
Throws an error when given a type other than `Date`.

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## Examples
```javascript
isInFuture(new Date('2022-01-01')) // false
```

```javascript
isInFuture(new Date('2030-01-01')) // true
```

```javascript
isInFuture('2022-01-02') // throws an error
```

