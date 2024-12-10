const express = require("express");
const { approveAdoption } = require("../controllers/adoptionController");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("/:id/approve", authenticate, approveAdoption);

module.exports = router;
