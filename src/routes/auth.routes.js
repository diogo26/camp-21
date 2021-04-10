const router = require("express").Router();
const { authController } = require("../controllers");

router.post("/signin", authController.signin);
module.exports.auth = router;
