---
sidebar_label: isInPast()
---

# `isInPast`
Returns a boolean, `true` if the given date is in the past.

## Usage
```javascript
import { isInPast } from 'easy-dates'

isInPast(date)
```

## Prop types
Throws an error when given a type other than `Date`.

| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `date`          | `date` | yes      | n/a     |

## Examples
```javascript
isInPast(new Date('2022-01-01')) // true
```

```javascript
isInPast(new Date('2030-01-01')) // false
```

```javascript
isInPast('2022-01-02') // throws an error
```

