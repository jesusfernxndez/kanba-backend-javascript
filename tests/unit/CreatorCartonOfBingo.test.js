const {server} = require('../helpers')
const {CreateCartonOfBingo} = require('../../src/services/carton.service')
const {v4: uuid} = require('uuid')

test("Creator to carton of bingo", async () => {
  const createdCarton = await CreateCartonOfBingo({ id: uuid(), user_id: 1 })
  console.log(createdCarton)
})

afterAll(() => {
  server.close()
})