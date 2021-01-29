const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  })
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [req.body.burger_name, req.body.devoured], function (result) {
    // console.log("------1111------");
    // console.log({ id: result.burger });
    // console.log("------2222------");
    // console.log({ id: result });
    res.json({ id: result.burger })
  })
})

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  let columToUpdate = { devoured: 1 }
  burger.updateOne(columToUpdate, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

module.exports = router;


