const filterDices = part => part.indexOf("d") > -1;
const filterBonuses = part => !filterDices(part);
const splitDicesString = part => part.split("d").map(v => parseInt(v, 10));
const rollDice = (final, [number, faces]) => {
  // roll dices individually
  const results = Array(number)
    .fill("")
    .map(() => Math.floor(Math.random() * faces) + 1);

  return {
    ...final,
    dices: {
      ...final.dices,
      [`d${faces}`]: results
    },
    result: (final.result || 0) + results.reduce((prev, next) => prev + next)
  };
};
const sumBonuses = (final, _bonus) => {
  const bonus = parseInt(_bonus, 10);
  return {
    ...final,
    bonus: (final.bonus || 0) + bonus,
    result: final.result + bonus
  };
};

const pick = (final, amount) => {
  const dices = Object.keys(final.dices);

  if (dices.length > 1) {
    throw new Error(
      "pick only works with the results of rolling only one dice"
    );
  }

  const key = dices[0];

  const dice = final.dices[key]
    .sort()
    .reverse()
    .slice(0, amount);

  return {
    ...final,
    dices: {
      [key]: final.dices[key]
        .sort()
        .reverse()
        .slice(0, amount)
    },
    result: dice.reduce((prev, next) => prev + next) + (final.bonus || 0)
  };
};

const diceRoller = equation => {
  const parts = equation.toLowerCase().split("+");
  const dices = parts.filter(filterDices).map(splitDicesString);
  const bonuses = parts.filter(filterBonuses);
  const final = bonuses.reduce(sumBonuses, dices.reduce(rollDice, {}));
  return {
    ...final,
    pick: pick.bind(null, final)
  };
};

module.exports = diceRoller;
