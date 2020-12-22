const mongoose = require('mongoose');
const config = require('config')

let url = config.get('mongoUri');
let localURi = config.get('localUri');

mongoose.connect(url, 
    {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser:true},
    ()=> console.log('connect'));


module.exports =  mongoose;