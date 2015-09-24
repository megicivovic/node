var express = require('express');
    mongoose = require('mongoose');


var db = mongoose.connect('mongodb://localhost/roomAPI');

//Console.WriteLine('povezao sa bazom');

var Room = require('./models/roomModel');

var app = express();

var port = process.env.PORT || 3000;


var roomRouter = express.Router();

roomRouter.route('/Rooms')
    .get(function (req, res) {
    
    var query = {};
    
    if (req.query.genre) {
        query.genre = req.query.genre;
    }
    Room.find(query, function (err, rooms) {
        if (err)
            res.status(500).send(err);
        else

            res.json(rooms);
    });
});

roomRouter.route('/Rooms/:roomId')
    .get(function (req, res) {
    
    
    Room.findById(req.params.roomId, function (err, room) {
        if (err)
            res.status(500).send(err);
        else
            res.json(room);
    });
});

app.use('/api', roomRouter);



app.get('/', function (req, res) {
    res.send('welcome to my API!');
});

app.listen(3000, function () {
    console.log('Gulp is running my app on  PORT:  3000');
});