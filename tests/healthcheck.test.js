const { server, api } = require('./helpers');

test('Check run server', async () => {
  await api.get('/').expect(200)
})

afterAll(() => {
  server.close()
})