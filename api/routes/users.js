const express =require('express');
const router = express.Router();

const {
    userLogin
  } = require("../utils/Auth");


// Login page 
router.post("/login", async (req, res) => {
    await userLogin(req.body, res);
  });
/*
router.post("/login", (req, res) => {
    console.log(req.body);
    res.send('hello');
  });
*/

module.exports = router;