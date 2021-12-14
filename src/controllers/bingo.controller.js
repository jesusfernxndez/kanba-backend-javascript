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
  const winner = WinnerBingoGame({id_game: req.params.id_game, id_carton: req.params.id_carton})
  if (!winner) return res.status(401).send({ error: 'No winner' })
  res.status(200).send({ message: 'Winer !!!' })
}

module.exports = {
  CreateBingoGame,
  RandomNumber,
  WinBingoGame
};
