const express = require("express");
const router = express.Router();
const { SignIn, Register } = require('../controllers/accountController');

router.post("/signIn", async (req, res, next) => {

  SignIn(req.body).then(data => {
    const product = JSON.parse(data);
    res.send({
      status: "success",
      data: product
    })
    return data;
  }).catch(err => console.log(err))

});

router.post("/register", async (req, res, next) => {

  Register(req.body).then(data => {
    const product = JSON.parse(data);
    res.send({
      status: "success",
      data: product
    })
    return data;
  }).catch(err => console.log(err));

});

module.exports = router;