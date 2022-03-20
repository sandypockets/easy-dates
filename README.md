# Easy Dates
Easy dates is a lightweight, zero-dependency library for getting simple date information, easily. 

[![License: MIT](https://img.shields.io/npm/l/easy-dates?color=1eb319)](LICENSE.md)
[![](https://img.shields.io/npm/v/easy-dates?color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/npm/dw/easy-dates?label=npm%20downloads&color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/sandypockets)

I created this lib to solve a problem of my own. I noticed I was writing the same code over and over, and figured there are likely others experiencing the same challenges. Now `easy-dates` can be used to get simple data, like the number of days in a month, or what the date will be in X days, without importing a multi megabyte library or fiddling around with the Date object. 

Check out the full list of what `easy-dates` can return below, and feel free to submit an issue if there is a particular function you'd like to see get added.

Please note that this library is currently experimental, and will likely undergo several breaking changes on the way to the 1.0.0 release. Until then, `easy-dates` is not suitable for production.

## Demo
Check out a [live demo on StackBlitz](https://stackblitz.com/edit/react-hdbgw4?file=src/App.js)


## Installation
`easy-dates` can be installed with `yarn` or `npm`
```shell
# with yarn
yarn add easy-dates
```

```shell
# with npm
npm install easy-dates
```

## Usage
```javascript
import { dateNow } from 'easy-dates';

dateNow('en-CA') // 2022-03-17, 11:50:09 p.m.
```

## Available functions

### `getDaysInMonth`
Returns the number of days in a given month. Note that month indexes start at 0.

```javascript
import { getDaysInMonth } from 'easy-dates';

getDaysInMonth(1, 2022) // 28
getDaysInMonth("feb", 2022) // 28 
// assuming the actual current month is february, 2022
getDaysInMonth() // 28 
```

| arg       | type   | required | default       |
|-----------|--------|----------|---------------|
| year      | number | no       | current year  |
| monthName | string | no       | current month |

<br />

### `getMonthIndex`
Returns the index of the current month. Note that month indexes start at 0.


```javascript
import { getMonthIndex } from 'easy-dates';

getMonthIndex('April') // 3

// Returns current month without arg (example assumes current month is March)
getMonthIndex() // 2
```

| arg       | type   | required | default |
|-----------|--------|----------|---------|
| monthName | string | no       | current |

<br />

### `getTodayName`
Returns the name of today's day.

```javascript
import { getTodayName } from 'easy-dates';

getTodayName() // Friday
```

| arg | type | required | default |
|-----|------|----------|---------|
| n/a | n/a  | n/a      | n/a     |

<br />

### `getTomorrow`
Returns tomorrow's date.

```javascript
import { getTomorrow } from 'easy-dates';

getTomorrow('en-CA') // 2022-03-19, 4:00:29 p.m.
```

| arg        | type   | required | default |
|------------|--------|----------|---------|
| locale     | string | no       | n/a     |

<br />

### `daysFromNow`
Returns a date a specified number of days away. (i.e. what day is it 17 days from now).

```javascript
import { daysFromNow } from 'easy-dates';

daysFromNow(17, 'en-UK') // 4/4/2022, 3:57:54 PM
```

| arg        | type   | required | default |
|------------|--------|----------|---------|
| locale     | string | no       | 'en-CA' |
| multiplier | number | yes      | n/a     |

<br />

### `getYear`
Returns the current year. This function does not accept any arguments.

```javascript
import { getYear } from 'easy-dates';

getYear() // 2022
```

| arg | type | required | default |
|-----|------|----------|---------|
| n/a | n/a  |  n/a     | n/a     |

<br />

### `dateNow`
Returns the current date and time.

```javascript
import { dateNow } from 'easy-dates';

dateNow('en-US') // 3/18/2022, 3:53:39 PM
```

| arg    | type   | required | default |
|--------|--------|----------|---------|
| locale | string | yes      | 'en-CA' |

<br />

### `closestTo`
Returns the date from an array closest to a given date.

```javascript
import { closestTo } from 'easy-dates';

// variables for demonstration only, not required for use
const today = new Date(Date.now());
const tomorrow = new Date(Date.now() + 86400000);
const dayAfterTomorrow = new Date(Date.now() + 86400000 * 2);
const weekAfterTomorrow = new Date(Date.now() + 86400000 * 7);
const argumentsArray = [tomorrow, dayAfterTomorrow, weekAfterTomorrow];
// end variables

closestTo(today, argumentsArray) 
// Returns an object
// { difference: 85400000, closest: Sat Mar 19 2022 20:26:34 GMT-0400 (Eastern Daylight Time), closestIndex: 0 }
```

| arg         | type  | required | default |
|-------------|-------|----------|---------|
| controlDate | Date  | yes      | null    |
| args        | array | yes      | null    |



<br />

### `dateToUnix`
Returns a Unix timestamp from a given date object, string, or milliseconds timestamp.

```javascript
import { dateToUnix } from 'easy-dates';

const dateObject = new Date(Date.now()) // Sat Mar 19 2022 23:46:03 GMT-0400 (Eastern Daylight Time)
const millisecondsDateStamp = new Date(Date.now()).getTime(); // 1647747963147

dateToUnix(dateObject) // 1647747963
dateToUnix(millisecondsDateStamp) // 1647747963

```

_Does this work to convert a locale date string back to a date or timestamp too?_ It does. But you should try to avoid it. Here's an example.

```javascript
import { dateToUnix } from 'easy-dates';

const localeDateString = new Date(millisecondsDateStamp).toLocaleString('en-CA') // '2022-03-19, 11:46:03 p.m.'

dateToUnix(localeDateString) // 1647734940
```
As you can see, the first two conversions (a date object or milliseconds timestamp) are exact, however converting a locale date string back into a date object or timestamp is not. The inexactness of that particular use of the function might be suitable in rare cases, so I included it.  

| arg  | type | required | default |
|------|------|----------|---------|
| date | any  | yes      | null    |

