var mongoose = require('mongoose');
require('../models/models.js');

var Pokemon = mongoose.model('Pokemon'); //Any name is okay

module.exports={
    index: function(req, res){
        res.render('index');
    },
}