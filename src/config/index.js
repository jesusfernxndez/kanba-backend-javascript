require("dotenv").config();

module.exports = {
  dev: process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test",
  port: process.env.PORT
};
