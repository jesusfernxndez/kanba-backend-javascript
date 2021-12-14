const { server, api, ID_DEFAULT_GAME_MOOCK } = require('../helpers');


test('Get random number for bingo kata', async () => {
  await api.get(`/bingo/number/${ID_DEFAULT_GAME_MOOCK}`).expect(200);
})

afterAll(() => {
  server.close()
})