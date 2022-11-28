const express = require("express");
const router = express.Router();
const accountController = require("../controllers/Accounts");

router.get("/", (req, res) => {
    res.send("Hello World");
});
router.get("/get/:noreg", accountController.name);

module.exports = router;