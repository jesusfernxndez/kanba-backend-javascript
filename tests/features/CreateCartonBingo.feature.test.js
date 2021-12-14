const { server, api } = require('../helpers');

test('Create a new carton for bingo kata', async () => {
  await api.post('/cartons').expect(201);
})

afterAll(() => {
  server.close()
})