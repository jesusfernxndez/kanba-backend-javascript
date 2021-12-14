const router = require("express").Router();
const { NewCarton } = require("../controllers/carton.controller");

router.post("/", NewCarton);

module.exports = router;