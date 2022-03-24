---
sidebar_label: "getMonthIndex()"
---

# `getMonthIndex()`
Returns the index of the current month. Note that month indexes start at 0.

## Usage
```javascript
import { getMonthIndex } from 'easy-dates';

getMonthIndex(monthName)
```

## Prop types
| prop        | type   | required | default |
|-------------|--------|----------|---------|
| `monthName` | string | no       | current |

## Examples
```javascript title="get the current month (March)"
getMonthIndex() // 2
// or
getMonthIndex('current') // 2
```

```javascript title="get a specific month by name"
getMonthIndex('April') // 3
// or
getMonthIndex('april') // 3
```

```javascript title="get a specific month by short name"
getMonthIndex('Apr') // 3
// or
getMonthIndex('apr') // 3
```