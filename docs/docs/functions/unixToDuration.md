---
sidebar_label: "unixToDuration()"
---

# `unixToDuration()`
Takes in a Unix timestamp, and a measurement type (i.e. minutes), and returns the amount, or duration, in said type.

## Usage
```javascript
import { unixToDuration } from 'easy-dates';

getDuration(unixTimestamp, measure)
```

## Prop types
| prop            | type   | required | default |
|-----------------|--------|----------|---------|
| `unixTimestamp` | number | yes      | null    |
| `measure`       | string | yes      | days    |

## Examples
```javascript
const firstDate = new Date("December 17, 1995 03:24:00");
const secondDate = new Date("December 17, 2000 03:24:00");

// Gets difference between 1995 and 2000 as a Unix timestamp
const durationAsUnixTimestamp = getDuration(firstDate, secondDate, "seconds");

// Convert the Unix timestamp from seconds into years
unixToDuration(durationAsUnixTimestamp, "years") // 5.019230769230769
```

```javascript title="years since January 1st, 1970"
const dateNow = new Date(Date.now())
unixToDuration(dateNow, "years") // 52
```