# Easy Dates
Easy dates is a React hook for getting simple date information. 

I created this lib to solve a problem of my own. I noticed I was writing the same code over and over, so I fixed it. Now easy-dates can be used to get simple data, like the number of days in a month, or what the date will be in X days. Check out the full list of what it can return below.

## Installation
```shell
yarn add easy-dates
```

## Usage
```javascript
import { useEasyDates } from 'easy-dates';

export default function MyComponent() {
  const date = useEasyDates()

  const numberOfDaysInFeb = date('daysInSpecificMonth', false, 1) // Outputs 28

  return (
    <div>
      <p>{numberOfDaysInFeb}</p>
    </div>
  );
}
```

## Available options
The hook accepts up to 3 arguments: 
1. A string, representing the type of data you want returned (required)
2. A string, matching the desired locale (required)
3. A number, representing the number of days or months for some functions, explained below (optional)

Although a locale is required, if you do not want to return the date in a particular locale, set the parameter to `false`.

We'll assume that you have the package imported already, and are creating instances of the hook.

`easy-dates` can return the following information:

### `todayName`
```javascript
date('todayName', false) // 'Thursday'
```

### `today`
Without locale
```javascript
date('today', false) // Thu Mar 17 2022 21:39:01 GMT-0400 (Eastern Daylight Time)
```

With locale
```javascript
date('today', 'en-CA') // 2022-03-17, 9:40:00 p.m.
```

### `tomorrow`
Without locale
```javascript
date('tomorrow', false) // Fri Mar 18 2022 21:41:00 GMT-0400 (Eastern Daylight Time)
```

With locale
```javascript
date('tomorrow', 'en-CA') // 2022-03-18, 9:40:40 p.m.
```

### `currentMonthIndex`
The month index starts at zero. January is 0, December is 11
```javascript
date('currentMonthIndex') // 2
```

### `currentMonthName`
```javascript
date('currentMonthName') // March
```

### `daysInCurrentMonth`
```javascript
date('daysInCurrentMonth') // 31
```

### `daysInSpecificMonth`
The last argument represents the month index to search, as the month index starts at zero. 
```javascript
date('daysInSpecificMonth', false, 2) // 31
```

### `currentYear`
```javascript
date('currentYear') // 2022
```

### `daysFromNow`
```javascript
date('daysFromNow', false, 7) // Thu Mar 24 2022 21:49:09 GMT-0400 (Eastern Daylight Time)
```

```javascript
date('daysFromNow', 'en-CA', 7) // 2022-03-24, 9:49:29 p.m.
```

## Locales
Although this example uses the `en-CA` locale, you can still use international locales, even to return non-English characters, like Arabic.

```javascript
date('daysFromNow', 'ar-EG', 7))
```