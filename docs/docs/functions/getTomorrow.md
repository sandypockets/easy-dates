---
sidebar_label: "getTomorrow()"
---

# `getTomorrow()`
Returns tomorrow's date as a JavaScript date object.

## Usage
```javascript
import { getTomorrow } from 'easy-dates';

getTomorrow(locale)
```

## Prop types
| prop     | type   | required | default   |
|----------|--------|----------|-----------|
| `locale` | string | no       | `'en-CA'` |

## Examples
```javascript title="providing a locale"
getTomorrow('en-CA') // 2022-03-19, 4:00:29 p.m.
```

```javascript title="default 'en-CA' locale"
getTomorrow() // 2022-03-19, 4:00:29 p.m.
```