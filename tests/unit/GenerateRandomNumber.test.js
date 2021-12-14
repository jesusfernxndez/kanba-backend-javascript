const { server } = require("../helpers");
const { RandomNumberForBingo } = require("../../src/utils");

test("Generate random number to bingo, range -> 1 - 75", async () => {
  const number = RandomNumberForBingo();
  expect(number).toBeGreaterThanOrEqual(1);
  expect(number).toBeLessThanOrEqual(75);
});

afterAll(() => {
  server.close();
});
