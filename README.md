# Easy Dates
Easy dates is a lightweight, zero-dependency library for getting simple date information, easily. 

[![License: MIT](https://img.shields.io/npm/l/easy-dates?color=1eb319)](LICENSE.md)
[![](https://img.shields.io/npm/v/easy-dates?color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/npm/dw/easy-dates?label=npm%20downloads&color=%231eb319)](https://www.npmjs.com/package/easy-dates)
[![](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/sandypockets)

 ### Read the docs at [easy-dates.dev](https://easy-dates.dev)

I created this library to solve a problem of my own. I noticed I was writing the same code over and over, and figured there are likely others experiencing the same challenges. Now `easy-dates` can be used to get simple data, like the number of days in a month, or what the date will be in X days, without importing a multi megabyte library or fiddling around with the Date object. 

Check out the full list of what `easy-dates` can do in the [documentation](https://easy-dates.dev), and feel free to submit an issue if there is a particular function you'd like to see get added.

Please note that this library is currently experimental, and will likely undergo several breaking changes on the way to the 1.0.0 release. Until then, `easy-dates` is not suitable for production.

## Demo
Check out a live demo of the latest `easy-dates` version on StackBlitz

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

Or if you're working with a static HTML document, you can import it in script tags using a CDN

### jsDeliver
```html
<script src="https://cdn.jsdelivr.net/npm/easy-dates@0.6.0/dist/index.js"></script>
```

### UNPKG
```html
<script src="https:///unpkg.com/easy-dates@0.6.0/dist/index.js"></script>
```

## Usage
```javascript
import { dateNow } from 'easy-dates';

dateNow('en-CA') // 2022-03-17, 11:50:09 p.m.
```

### For more information about `easy-dates`, refer to our Documentation website at [easy-dates.dev](https://easy-dates.dev)

## Available functions

- `closestTo()`
- `dateNow()`
- `dateToUnix()`
- `daysFromNow()`
- `getDaysInMonth()`
- `getDuration()`
- `getMonthIndex()`
- `getTodayName()`
- `getTomorrow()`
- `getYear()`
- `isAfter()`
- `isBefore()`
- `isDate()`
- `isEqual()`
- `unixToDate()`
- `unixToDuration()`