const {RandomNumberForBingo} = require('../utils')

const RandomNumberController = (req, res) => {
  const number = RandomNumberForBingo();
  res.status(200).send({ number });
}

module.exports = {
  RandomNumberController
}