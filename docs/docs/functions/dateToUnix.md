---
sidebar_label: "dateToUnix()"
---

# `dateToUnix()`
Returns a Unix timestamp from a given date object, string, or milliseconds timestamp.

### Usage
```javascript
import { dateToUnix } from 'easy-dates';

const dateObject = new Date(Date.now()) // Sat Mar 19 2022 23:46:03 GMT-0400 (Eastern Daylight Time)
const millisecondsDateStamp = new Date(Date.now()).getTime(); // 1647747963147

dateToUnix(dateObject) // 1647747963
dateToUnix(millisecondsDateStamp) // 1647747963
```

### Prop types

| prop   | type  | required | default  |
|--------|-------|----------|----------|
| `date` | `any` | yes      | `null`   |


:::info  Using a `string` prop?

_Does this work to convert a locale date string back to a date or timestamp too?_ It does. But you should try to avoid it. Here's an example.

```javascript title="locale string"
const localeDateString = new Date(millisecondsDateStamp).toLocaleString('en-CA') // '2022-03-19, 11:46:03 p.m.'

dateToUnix(localeDateString) // 1647734940
```

As you can see, the first two conversions (a date object or milliseconds timestamp) are exact, however converting a locale date string back into a date object or timestamp is not.

Similar behaviour can be observed when casting an `object` as a `string`.

```javascript title="date object as string"
const someDateObject = new Date(Date.now()) // Sun Mar 20 2022 23:21:10 GMT-0400 (Eastern Daylight Time)

dateToUnix("Sun Mar 20 2022 23:21:10 GMT-0400 (Eastern Daylight Time)") // 1647919810
```

### When are strings ok to use?
When the value of the string is a number.

```javascript
const someTimeNumber = new Date(Date.now()).getTime();

dateToUnix("1647833600771") // 1647833600
```
:::

