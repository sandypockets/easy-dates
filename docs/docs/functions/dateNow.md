---
sidebar_label: 'dateNow()'
---

# `dateNow()`
The `dateNow()` function returns the current date in a specified locale. 

### Usage
```javascript
import { dateNow } from 'easy-dates';

dateNow(locale)
```

### Prop types
If a locale argument is not provided when calling the function, then the locale defaults to Canadian English.

| prop     | type     | required | default   |
|----------|----------|----------|-----------|
| `locale` | `string` | no       | `'en-CA'` |

### Examples
For more examples of which locales can be used, refer to the [MDN Documentation: Using locales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#using_locales).

```javascript title='Canadian English'
dateNow('en-CA') // 2022-03-20, 11:07:04 p.m.
```

```javascript title='US English'
dateNow('en-US') // 3/20/2022, 11:07:04 PM
```

```javascript title='UK English'
dateNow('en-UK') // 20/03/2022, 23:06:39
```

```javascript title='Arabic'
dateNow('ar-EG') // '٢٠‏/٣‏/٢٠٢٢, ١١:٠٨:٠١ م'
```

