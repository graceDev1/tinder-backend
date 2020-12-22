const personModel = require('../models/personModel');


// add new person to tinder cards
let addPerson = (req,res) => {
    let personData = req.body;
    personModel.create(personData, (err, data)=>{
        if(err) throw res.status(500).json({err});
        res.status(201).json({data})
    });
}


// retrieve person to the database

let fetchPerson = (req,res) =>{
    personModel.find((err, data)=>{
        if(err) throw res.status(500).json(err);
        res.status(201).json(data)
    })
}


module.exports = {addPerson, fetchPerson};

