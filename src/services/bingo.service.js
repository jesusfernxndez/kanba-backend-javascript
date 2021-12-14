const CreateBingoGame = ({id, users, numbers}) => {
  const bingoGame = {
    id,
    users,
    numbers
  }

  return bingoGame;
}

module.exports = {
  CreateBingoGame
}