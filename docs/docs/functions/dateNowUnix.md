---
sidebar_label: dateNowUnix()
---

# `dateNowUnix()`
Returns a number representing the current date and time in Unix time (seconds).

:::tip
If you need the current date in milliseconds (JavaScript timestamp), then use [`secondsToMilliseconds()`](/docs/functions/secondsToMilliseconds) on the result of `dateNowUnix()`.
:::

## Usage
```javascript
import { dateNowUnix } from 'easy-dates';

dateNowUnix();
```

## Prop types
This function does not take any props. 

## Examples
```javascript
dateNowUnix() // 1648871014
```