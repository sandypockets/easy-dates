# Easy Dates
Easy dates is a lightweight lib for getting simple date information. 

I created this lib to solve a problem of my own. I noticed I was writing the same code over and over, so I fixed it. Now easy-dates can be used to get simple data, like the number of days in a month, or what the date will be in X days. Check out the full list of what it can return below.

## Installation
```shell
yarn add easy-dates
```

## Usage
```javascript
import { dateNow } from 'easy-dates';

dateNow('en-CA') // 2022-03-17, 11:50:09 p.m.
```

## Available options

### `getDaysInMonth`
### `getMonthIndex`
### `getTodayName`
### `getTomorrow`
### `daysFromNow`
### `getYear`
### `dateNow`