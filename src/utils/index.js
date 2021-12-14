const RandomNumberForBingo = () => {
  const number = Math.floor(Math.random() * (75 - 1)) + 1;
  return number;
};

const RandomNumberInRange = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

const LettersBingo = () => {
  return ["B", "I", "N", "G", "O"];
};

const ColumnsBingo = () => {
  return {
    B: { min: 1, max: 15, count: 4 },
    I: { min: 16, max: 30, count: 4 },
    N: { min: 31, max: 45, count: 3 },
    G: { min: 46, max: 60, count: 4 },
    O: { min: 61, max: 75, count: 4 },
  };
};

module.exports = { RandomNumberForBingo, RandomNumberInRange, LettersBingo, ColumnsBingo };
