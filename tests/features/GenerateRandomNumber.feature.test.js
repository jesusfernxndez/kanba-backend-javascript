const { server, api } = require('../helpers');

test('Get random number for bingo kata', async () => {
  await api.get('/bingo/number').expect(200).expect('Content-Type', /application\/json/);
})

afterAll(() => {
  server.close()
})