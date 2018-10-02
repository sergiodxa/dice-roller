const roll = require("../src/index.js");

describe('roll("2d4+1d8+3")', () => {
  const result = roll("2d4+1d8+3");
  test("should return an object", () => {
    expect(typeof result).toBe("object");
  });

  test("should has the property 'result'", () => {
    expect(result).toHaveProperty("result");
  });

  test("  should be a number", () => {
    expect(typeof result.result).toBe("number");
  });

  test("  should be between 6 and 19", () => {
    expect(result.result).toBeGreaterThanOrEqual(6);
    expect(result.result).toBeLessThanOrEqual(19);
  });

  test("should has the property 'dices'", () => {
    expect(result).toHaveProperty("dices");
  });

  test("  should be an object", () => {
    expect(typeof result.dices).toBe("object");
  });

  test("  should has the property d4", () => {
    expect(result.dices).toHaveProperty("d4");
  });

  test("    should be an array", () => {
    expect(Array.isArray(result.dices.d4)).toBeTruthy();
  });

  test("    should has two items", () => {
    expect(result.dices.d4).toHaveLength(2);
  });

  test("    should be between 1 and 4", () => {
    expect(result.dices.d4[0]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d4[0]).toBeLessThanOrEqual(4);

    expect(result.dices.d4[1]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d4[1]).toBeLessThanOrEqual(4);
  });

  test("  should has the property d8", () => {
    expect(result.dices).toHaveProperty("d8");
  });

  test("    should be an array", () => {
    expect(Array.isArray(result.dices.d8)).toBeTruthy();
  });

  test("    should has one item", () => {
    expect(result.dices.d8).toHaveLength(1);
  });

  test("    should be between 1 and 8", () => {
    expect(result.dices.d8[0]).toBeGreaterThanOrEqual(1);
    expect(result.dices.d8[0]).toBeLessThanOrEqual(8);
  });

  test("should has the property 'bonus'", () => {
    expect(result).toHaveProperty("bonus");
  });

  test("  should be a number", () => {
    expect(typeof result.bonus).toBeTruthy();
  });

  test("  should be equal 3", () => {
    expect(result.bonus).toBe(3);
  });
});

describe('roll("4d6").pick(3)', () => {
  const final = roll("4d6");
  test("should get the three highest values from the roll", () => {
    expect(final.pick(3).dices["d6"]).toHaveLength(3);
  });

  test("should have the result updated to use the three picked values", () => {
    expect(final.pick(3).result).toBeLessThanOrEqual(final.result);
  });

  test("should throw if more than one type of dice is rolled", () => {
    expect(() => roll("1d4+2d8").pick(1)).toThrow()
  });
});
