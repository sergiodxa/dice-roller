/*
 * diceRoller
 *
 * Library to roll dices like '2d4+3+1d8+2'
 */
function diceRoller(equation) {
  try {
    var parts = equation.toLowerCase().split("+");

    var dices = parts
      .filter(function getDices(part) {
        return part.indexOf("d") !== -1;
      })
      .map(function splitDicesStrings(part) {
        return part.split("d");
      });

    var bonuses = parts.filter(function getBonuses(part) {
      return part.indexOf("d") === -1;
    });

    var returned = {
      result: 0,
      dices: {},
      bonus: 0
    };

    dices.forEach(function rollDice(dice) {
      var number = parseInt(dice[0]);
      var faces = parseInt(dice[1]);
      var r = 0;

      returned.dices["d" + faces] = returned.dices["d" + faces] || [];

      for (var i = 0; i < number; i++) {
        res = Math.floor(Math.random() * faces) + 1;
        returned.dices["d" + faces].push(res);
        r += res;
      }

      returned.result += r;
    });

    bonuses.forEach(function plusBonus(bonus) {
      returned.bonus += parseInt(bonus);
      returned.result += parseInt(bonus);
    });

    return returned;
  } catch (err) {
    return err;
  }
}

module.exports = diceRoller;
