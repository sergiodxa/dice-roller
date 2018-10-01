const filterDices = part => part.indexOf("d") > -1;
const filterBonuses = part => !filterDices(part);
const splitDicesString = part => part.split("d");
const rollDice = (final, [_number, _faces]) => {
  // format the key
  const key = `d${_faces}`;
  const number = parseInt(_number, 10);
  const faces = parseInt(_faces, 10);
  // roll dices individually
  const results = Array(number)
    .fill("")
    .map(() => Math.floor(Math.random() * faces) + 1);

  return {
    ...final,
    dices: {
      ...final.dices,
      [key]: results
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

const diceRoller = equation => {
  const parts = equation.toLowerCase().split("+");
  const dices = parts.filter(filterDices).map(splitDicesString);
  const bonuses = parts.filter(filterBonuses);
  return bonuses.reduce(sumBonuses, dices.reduce(rollDice, {}));
};

module.exports = diceRoller;
