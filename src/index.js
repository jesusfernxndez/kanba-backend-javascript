const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { dev, port } = require("./config");
const app = express();

const APP_PORT = dev ? 4000 : port;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));
app.use("/bingo", require("./routes/bingo"))

const server = app.listen(APP_PORT, () => {
  console.log(`server listening on port ${APP_PORT}`);
});

module.exports = { app, server };
