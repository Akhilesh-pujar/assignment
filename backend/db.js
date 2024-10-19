
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = process.env.MONGODB_URI;
;

mongoose.connect(mongoDB).then(() => console.log("connected to MongoDb successfully")).catch((err) => console.log(err));

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      
    },
    phone: {
        type: Number,
  
       
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
       
    },
    companyEmail: {
        type: String,
        required: true,
        trim: true,
       
    },
    employeeSize: {
        type: Number,
        required: true,
       
       
    }

});

const JobBoardDetails = new mongoose.Schema({
    JobTitle: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 100,
        
    },
    JobDesc: {
        type: String,
        required: true,
        unique: true,
       
        lowercase: true,
        minLength: 10,
        maxLength: 200
    },
    JobExpLev:{
        type: Number,
        required: true,
        min:0
    },
    AddCandi:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,

    },
    EndDate:{
        type: Date,
        required: true,
     
    }
});




// Create a model from the schema
const User = mongoose.model('User', userSchema,);
const JobBoardDet= mongoose.model('JobDetails', JobBoardDetails,);

module.exports = {
	User,JobBoardDet
};