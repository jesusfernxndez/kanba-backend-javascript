const fs = require("fs");
let db = require("../../db.json");
const { RandomNumberForBingo } = require("../utils");

const CreatorBingoGame = async ({id, users, numbers}) => {
  const bingoGame = {
    id,
    users,
    numbers
  }
  db.games.push(bingoGame);
  await fs.promises.writeFile("db.json", JSON.stringify(db, null, 2));
  return bingoGame;
}

const NewRandomNumber = async ({id_game}) => {
  const number = RandomNumberForBingo()
  const game = db.games.find(game => game.id === id_game)
  game.numbers.push(number);
  await fs.promises.writeFile("db.json", JSON.stringify(game, null, 2));
  return number;
}

const WinnerBingoGame = ({id_game, id_carton}) => {
  const bingo = SearchBingoGame(id_game)
  const carton = db.cartons.find(carton => carton.id === id_carton)

  const numbersOfCarton = []

  for (const column in carton.numbers) {
    for (let i = 0; i < carton.numbers[column].length; i++) {
      numbersOfCarton.push(carton.numbers[column][i])
    }
  }

  const validWinner = numbersOfCarton.filter(x => bingo.numbers.includes(x))

  if (validWinner.length === 24) return true

  return false
}

const SearchBingoGame = (id) => {
  const bingo = db.games.find((bingo) => bingo.id === id);
  return bingo;
}

module.exports = {
  CreatorBingoGame,
  NewRandomNumber,
  WinnerBingoGame
}