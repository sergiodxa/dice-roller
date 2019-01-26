# Dice roller

A tiny library to calculate roll dices using the classic D&D sintax: 1d20+4.

<a href="https://www.patreon.com/sergiodxa">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## How to use:
Just load and execute the function:

```javascript
import roll from "dice-roller";
const result = roll("2d4+1d8+3");
const picked = roll("4d6").pick(3);
```

The returned function is something like this:

```json
{
  "result": 14,
  "dices": {
    "d4": [2,3],
    "d8": [6]
  },
  "bonus": 3
}
```

## Tests

Run the commands:

```
yarn # install dependencies
yarn test # run tests
```
