const {v4: uuid} = require('uuid')
const {CreateCartonOfBingo} = require('../services/carton.service')

const NewCarton = async (req, res) => {
  const { user_id } = req.body;
  await CreateCartonOfBingo({id: uuid(), user_id});
  res.status(201).send();
}

module.exports = {
  NewCarton
}