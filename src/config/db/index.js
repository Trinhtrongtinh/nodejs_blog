const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/nhavannode');
        console.log("Connect successfully!!!");
    }
    catch(error){
        console.log("Fail to connect!!!")
    }
}

module.exports = {connect};