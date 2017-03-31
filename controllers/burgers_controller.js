/* Import express */
var express = require('express');
/* Import the model to use database functions */
var burger = require('../models/burger.js');

var router = express.Router();

/* Create all routes */

/* Main Get route */
router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {
          burgers: data
        });
    });
});

/* Post route */
router.post("/", function(req, res) {
    burger.create(['burger_name'], [req.body.name], function(response) {
        res.redirect('/');
    })
})

router.put("/:id", function(req, res) {
    burger.update({ devoured: 1 }, { id: req.params.id }, function(response) {
        res.redirect('/');
    })
})

/* Export router */
module.exports = router;