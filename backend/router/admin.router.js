const express = require("express");
const router = express.Router();
const {
  adminTest,
  adminAccount,
} = require("../controller/admin.controller.js");

router.get("/", adminTest);
router.post("/account", adminAccount);

module.exports = router;
