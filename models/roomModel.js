var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var roomModel = new Schema({
    name: {
        type: String
    },   
   available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Room', roomModel);