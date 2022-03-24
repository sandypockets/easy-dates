---
sidebar_position: 3
---

# Usage

After installing `easy-dates`, using it is as simple as importing (or requiring) the function at the top of your project or component file. 

## ES Modules
```javascript
import { dateNow } from 'easy-dates';
```

Then you can use it normally, like you would any other function. Here's a React.js example.

```jsx title="src/components/MyComponent.jsx"
import React from 'react';
import { dateNow } from "easy-dates";

function MyComponent() {
  return (
    <div>
      <p>{dateNow('en-CA')}</p>
    </div>
  )
}
```
Check out a live ESM demo of this function, and others on StackBlitz. 

[![Open easy-dates demo in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/easy-dates-demo?file=src/App.js)

## CommonJS
```javascript title="index.js"
const { dateNow } = require('easy-dates');

const todaysDate = dateNow('en-CA');

console.log(todaysDate);
```

In the example above, the `dateNow()` function takes in a single argument (the `en-CA` locale), and returns the current date, in the specified locale. In the example, the return value would look something like `2022-03-17, 11:50:09 p.m.`

Check out a live CommonJS demo of this function, and others on StackBlitz below.

[![Open easy-dates demo in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/easy-dates-nodejs?file=index.js)