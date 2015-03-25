var diceRoller = require('../index.js');
var equation   = '2d4+1d8+3';
var result     = diceRoller(equation);

describe('diceRoller("2d4+1d8+3")', function () {
  it('should return an object', function () {
    expect(result).to.be.an('object');
  });


  // result
  it('should has the property \'result\'', function () {
    expect(result).to.has.property('result');
  });

  it('  should be a number', function () {
    expect(result.result).to.be.a('number');
  });

  it('  should be between 6 and 19', function () {
    expect(result.result).to.be.closeTo(12.5, 6.5);
  });


  // dices
  it('should has the property \'dices\'', function () {
    expect(result).to.has.property('dices');
  });

  it('  should be an object', function () {
    expect(result.dices).to.be.an('object');
  });

  it('  should has the property d4', function () {
    expect(result.dices).to.has.property('d4');
  });

  it('    should be an array', function () {
    expect(result.dices.d4).to.be.an('array');
  });

  it('    should has two items', function () {
    expect(result.dices.d4).to.has.length(2);
  });

  it('    should be between 1 and 4', function () {
    expect(result.dices.d4[0]).to.be.closeTo(2.5, 1.5);
    expect(result.dices.d4[1]).to.be.closeTo(2.5, 1.5);
  })

  it('  should has the property d8', function () {
    expect(result.dices).to.has.property('d8');
  });

  it('    should be an array', function () {
    expect(result.dices.d8).to.be.an('array');
  });

  it('    should has one items', function () {
    expect(result.dices.d8).to.has.length(1);
  });

  it('    should be between 1 and 8', function () {
    expect(result.dices.d4[0]).to.be.closeTo(4.5, 3.5);
  })


  // bonus
  it('should has the property \'bonus\'', function () {
    expect(result).to.has.property('bonus');
  });

  it('  should be a number', function () {
    expect(result.bonus).to.be.a('number');
  });

  it('  should be equal 3', function () {
    expect(result.bonus).to.be.equal(3);
  });
});