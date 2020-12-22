const mongoose = require('../database/index');

const PersonSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});


module.exports =  mongoose.model('person',PersonSchema);