---
sidebar_label: weeksToDays()
---

# `weeksToDays()`
Returns the number of days equal to the given number of weeks.

## Usage
```javascript
import { weeksToDays } from 'easy-dates';

weeksToDays(weeks);
```

## Prop types

| prop    | type     | required | default  |
|---------|----------|----------|----------|
| `weeks` | `number` | yes      | `null`   |

## Examples
```javascript
weeksToDays(1); // 7
```

```javascript
weeksToDays(52); // 364
```

```javascript
weeksToDays('2'); // Error
```