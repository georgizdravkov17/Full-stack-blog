require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try{

       await mongoose.connect(process.env.DB_URI);

       console.log("Succesfully connected to db!");

    } catch(err){
        console.log(`Error occurred while connecting to the db!`);
    }
}


module.exports = { connectDB }

