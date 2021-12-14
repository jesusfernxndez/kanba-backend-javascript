const RandomNumberForBingo = () => {
  const number = Math.floor(Math.random() * (75 - 1)) + 1;
  return number
}

module.exports = { RandomNumberForBingo }