const express = require('express');
const randstore = require("../singletons/randstore");
const randAPI = require("../util/randapi");
const router = express.Router();

router.get("/getrand", (req, res) => {
  randstore.getrand().then(value => {
    return res.status(200).send({value: value});
  }).catch(err => {
    res.status(400).send({error: "Error retrieving random value: " + err});
  })
});

module.exports = router;
