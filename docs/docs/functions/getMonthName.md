---
sidebar_label: getMonthName()
---

# `getMonthName()`
Returns the name of the month, for the given month number, in a given locale. The default locale is English. 

:::info
### Supported locales
At this time, this function supports:

- English (en)
- French (fr)
:::

## Usage
```javascript
import { getMonthName } from 'easy-dates';

getMonthName();
```

## Prop types
| prop     | type      | required | default         |
|----------|-----------|----------|-----------------|
| `locale` | `String`  | no       | `en`            |
| `index`  | `Number`  | no       | `current month` |
| `short`  | `Boolean` | no       | `false`         |

## Examples
```javascript
getMonthName("en", 0); // "January"
getMonthName("en", 1); // "February"

getMonthName("fr", 0); // "Janvier"
getMonthName("fr", 1); // "Février"
```

```javascript title="with short parameter true"
getMonthName("en", 0, true); // "Jan"
getMonthName("en", 1, true); // "Feb"

getMonthName("fr", 0, true); // "Jan"
getMonthName("fr", 1, true); // "Fév"
```

```javascript title="returns current month when no index is provided"
getMonthName(); // "April"
```