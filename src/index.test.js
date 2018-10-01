var diceRoller = require("../src/index.js");
var equation = "2d4+1d8+3";
var result = diceRoller(equation);

describe('diceRoller("2d4+1d8+3")', () => {
  it("should return an object", () => {
    expect(typeof result).toBe("object");
  });

  it("should has the property 'result'", () => {
    expect(result).toHaveProperty("result");
  });

  it("  should be a number", () => {
    expect(typeof result.result).toBe("number");
  });

  it("  should be between 6 and 19", () => {
    expect(result.result).toBeGreaterThanOrEqual(6);
    expect(result.result).toBeLessThanOrEqual(19);
  });

  it("should has the property 'dices'", () => {
    expect(result).toHaveProperty("dices");
  });

  it("  should be an object", () => {
    expect(typeof result.dices).toBe("object");
  });

  it("  should has the property d4", () => {
    expect(result.dices).toHaveProperty("d4");
  });

  it("    should be an array", () => {
    expect(Array.isArray(result.dices.d4)).toBeTruthy();
  });

  it("    should has two items", () => {
    expect(result.dices.d4).toHaveLength(2)
  });

  it("    should be between 1 and 4", () => {
    expect(result.dices.d4[0]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d4[0]).toBeLessThanOrEqual(4);

    expect(result.dices.d4[1]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d4[1]).toBeLessThanOrEqual(4);
  });

  it("  should has the property d8", () => {
    expect(result.dices).toHaveProperty("d8");
  });

  it("    should be an array", () => {
    expect(Array.isArray(result.dices.d8)).toBeTruthy();
  });

  it("    should has one item", () => {
    expect(result.dices.d8).toHaveLength(1)
  });

  it("    should be between 1 and 8", () => {
    expect(result.dices.d8[0]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d8[0]).toBeLessThanOrEqual(8);
  });

  it("should has the property 'bonus'", () => {
    expect(result).toHaveProperty('bonus');
  });

  it("  should be a number", () => {
    expect(typeof result.bonus).toBeTruthy();
  });

  it("  should be equal 3", () => {
    expect(result.bonus).toBe(3);
  });
});
