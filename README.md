# Easy Dates
Easy dates is a lightweight, zero-dependency library for getting simple date information, easily. 

[![License: MIT](https://img.shields.io/npm/l/easy-dates?color=1eb319)](LICENSE.md)
[![](https://img.shields.io/npm/v/easy-dates?color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/npm/dw/easy-dates?label=npm%20downloads&color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/sandypockets)

 ### Read the docs at [easy-dates.dev](https://easy-dates.dev)

`easy-dates` was developed to solve a problem. Working with dates in JavaScript is a pain, and most libraries for working with them are massive, some even cresting 6mb. In most cases, that adds more to the bundle than can be justified. To fix it, `easy-dates` offers much of the same functionality as those other libraries, with a considerably smaller footprint.

Check out the full list of what `easy-dates` can do in the [documentation](https://easy-dates.dev), and feel free to submit an issue if there is a particular function you'd like to see get added.

## Demo
Check out a live demo of the latest `easy-dates` version on StackBlitz.

[![Open easy-dates demo in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/easy-dates-demo?file=src/App.js)

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

Or if you're working with a static HTML document, you can import it in script tags using a CDN.

### jsDeliver
```html
<script src="https://cdn.jsdelivr.net/npm/easy-dates@0.16.0/dist/index.js"></script>
```

### UNPKG
```html
<script src="https:///unpkg.com/easy-dates@0.16.0/dist/index.js"></script>
```

## Usage
Check the docs at [easy-dates.dev](https://easy-dates.dev/docs/functions/) for the full list of functions and their specific usage.

```javascript
import { dateNow } from 'easy-dates';

dateNow('en-CA') // 2022-03-17, 11:50:09 p.m.
```


## Available functions
Click on a function name below to view specific documentation for that function.

- [`closestTo()`](https://easy-dates.dev/docs/functions/closestTo)
- [`dateNow()`](https://easy-dates.dev/docs/functions/dateNow)
- [`dateToUnix()`](https://easy-dates.dev/docs/functions/dateToUnix)
- [`daysFromNow()`](https://easy-dates.dev/docs/functions/daysFromNow)
- [`daysToWeeks()`](https://easy-dates.dev/docs/functions/daysToWeeks)
- [`getDaysInMonth()`](https://easy-dates.dev/docs/functions/getDaysInMonth)
- [`getDuration()`](https://easy-dates.dev/docs/functions/getDuration)
- [`getMonthIndex()`](https://easy-dates.dev/docs/functions/getMonthIndex)
- [`getTodayName()`](https://easy-dates.dev/docs/functions/getTodayName)
- [`getTomorrow()`](https://easy-dates.dev/docs/functions/getTomorrow)
- [`getYear()`](https://easy-dates.dev/docs/functions/getYear)
- [`hoursToMilliseconds()`](https://easy-dates.dev/docs/functions/hoursToMilliseconds)
- [`hoursToMinutes()`](https://easy-dates.dev/docs/functions/hoursToMinutes)
- [`isAfter()`](https://easy-dates.dev/docs/functions/isAfter)
- [`isBefore()`](https://easy-dates.dev/docs/functions/isBefore)
- [`isDate()`](https://easy-dates.dev/docs/functions/isDate)
- [`isEqual()`](https://easy-dates.dev/docs/functions/isEqual)
- [`isInFuture()`](https://easy-dates.dev/docs/functions/isInFuture)
- [`isInPast()`](https://easy-dates.dev/docs/functions/isInPast)
- [`MillisecondsToHours()`](https://easy-dates.dev/docs/functions/MillisecondsToHours)
- [`millisecondsToMinutes()`](https://easy-dates.dev/docs/functions/millisecondsToMinutes)
- [`minutesToHours()`](https://easy-dates.dev/docs/functions/minutesToHours)
- [`minutesToMilliseconds()`](https://easy-dates.dev/docs/functions/minutesToMilliseconds)
- [`monthsToYears()`](https://easy-dates.dev/docs/functions/monthsToYears)
- [`unixToDate()`](https://easy-dates.dev/docs/functions/unixToDate)
- [`unixToDuration()`](https://easy-dates.dev/docs/functions/unixToDuration)
- [`findLatest()`](https://easy-dates.dev/docs/functions/findLatest)

### For more information about `easy-dates`, refer to our Documentation website at [easy-dates.dev](https://easy-dates.dev)
