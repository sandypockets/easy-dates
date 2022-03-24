---
sidebar_label: 'unixToDate()'
---

# `unixToDate()`
Returns a JavaScript Date object when given a Unix timestamp. Optionally include a locale to have the data object returned in a particular locale.

## Usage
```javascript
import { unixToDate } from 'easy-dates'

unixToDate(unixTimeStamp, locale)
```

## Prop types

| prop            | type     | required | default |
|-----------------|----------|----------|---------|
| `unixTimeStamp` | `number` | yes      | `null`  |
| `locale`        | `string` | no       | `null`  |

## Examples
```javascript title="returns an object"
unixToDate(1648078332) // Wed Mar 23 2022 19:32:12 GMT-0400 (Eastern Daylight Time)
```

```javascript title="returns a string"
unixToDate(1648078332, 'en-CA') // 2022-03-23, 7:32:12 p.m.
```
