const fs = require("fs");
let db = require("../../db.json");
const { ColumnsBingo, RandomNumberInRange } = require("../utils");

const CreateCartonOfBingo = async ({ id, user_id }) => {
  const columns = ColumnsBingo();
  const numbers = {};
  for (const column in columns) {
    numbersOfColumn = [];
    for (let i = 1; numbersOfColumn.length <= columns[column].count; i++) {
      const number = RandomNumberInRange(
        columns[column].min,
        columns[column].max
      );
      if (!numbersOfColumn.find((n) => n === number)) {
        numbersOfColumn.push(number);
      }
    }
    numbers[column] = numbersOfColumn;
  }
  const carton = {
    id,
    user_id,
    numbers,
  };
  db.cartons.push(carton);
  await fs.promises.writeFile("db.json", JSON.stringify(db, null, 2));
};

const SearchCartonOfBingo = (id) => {
  return db.cartons.find((card) => card.id === id);
};

module.exports = {
  CreateCartonOfBingo,
  SearchCartonOfBingo
};
