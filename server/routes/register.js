var express = require('express');
var router = express.Router();
var passport = require("passport");
var path = require('path');
var Users = require('../models/user');


router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/views/login.html'));
});

router.post('/', function(req, res, next){
    Users.create(req.body, function(err, post){
        if(err)
            next("That User Already Exists");
        else
            res.redirect('/views/index.html');
    })
});

module.exports = router;