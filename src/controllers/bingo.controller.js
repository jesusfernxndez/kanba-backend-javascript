const { RandomNumberForBingo } = require("../utils");

const RandomNumber = (req, res) => {
  const number = RandomNumberForBingo();
  res.status(200).send({ number });
};

module.exports = {
  RandomNumber,
};
