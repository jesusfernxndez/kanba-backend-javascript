const fs = require("fs");
const supertest = require("supertest");
const { app, server } = require("../src/index.js");
const db = require("../db.json");
const ID_DEFAULT_GAME_MOOCK = "A1B2C3D4-E1E2E3E4-D1D2D3D4-E1E2E3E4";

const api = supertest(app);

const SetmoockGameInitial = async () => {
  db.games.push({
    id: ID_DEFAULT_GAME_MOOCK,
    users: [],
    numbers: [],
  });
  await fs.promises.writeFile("db.json", JSON.stringify(db, null, 2));
};

const deleteMockGameInitial = async () => {
  const filterMoock = db.games.filter(
    (game) => game.id !== ID_DEFAULT_GAME_MOOCK
  );
  db.games = [];
  db.games = filterMoock;
  await fs.promises.writeFile("db.json", JSON.stringify(db, null, 2));
};

beforeEach(async () => {
  await SetmoockGameInitial();
});

afterAll(async () => {
  await deleteMockGameInitial();
});

module.exports = {
  server,
  api,
  SetmoockGameInitial,
  deleteMockGameInitial,
  ID_DEFAULT_GAME_MOOCK,
};
