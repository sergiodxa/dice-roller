# diceRoller

A tiny library to calculate roll dices using the classic D&D sintax: 1d20+4.

## How to use:
Just load and execute the function:

```javascript
var diceRoller = require('dice-roller');
var result = diceRoller('2d4+1d8+3');
```

The returned function is something like this:

```json
{
  "result": 14,
  "dices": {
    "d4": [2,3]
    "d8": [6]
  },
  "bonus": 3
}
```

## Tests
Just run the command:

```
npm test
```

## License
The MIT License (MIT)

Copyright (c) 2015 Sergio Daniel Xalambrí

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.