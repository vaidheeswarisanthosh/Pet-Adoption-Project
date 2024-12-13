const express = require("express");
const { login, register, getAllUsers ,updateUserRole,deleteUser} = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);


router.get('/admin', getAllUsers);
router.put('/admin/:userId',  updateUserRole);
router.delete('/admin/:userId',deleteUser);


module.exports = router;
