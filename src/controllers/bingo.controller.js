const {v4: uuid} = require('uuid')
const {WinnerBingoGame, CreatorBingoGame, NewRandomNumber} = require("../services/bingo.service")

const CreateBingoGame = async (req, res) => {
  await CreatorBingoGame({
    id: uuid(),
    users: [],
    numbers: []
  })
  res.status(201).send()
}

const RandomNumber = (req, res) => {
  const number = NewRandomNumber({id_game: req.params.id_game});
  res.status(200).send({ number });
};

const WinBingoGame = async (req, res) => {
  WinnerBingoGame()
  res.status(200).send()
}

module.exports = {
  CreateBingoGame,
  RandomNumber,
  WinBingoGame
};
