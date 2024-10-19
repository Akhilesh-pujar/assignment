
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const mongoDB = 'mongodb+srv://akhileshspujar:IzMg0FR87nRiUQug@jobboarding.njf1j.mongodb.net/?retryWrites=true&w=majority&appName=JobBoarding'

mongoose.connect(mongoDB).then(() => console.log("connected to MongoDb successfully")).catch((err) => console.log(err));

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 4,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
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
        maxLength: 30,
        
    },
    JobDesc: {
        type: String,
        required: true,
        unique: true,
       
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    JobExpLev:{
        type: Number,
        required: true
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
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    }
});




// Create a model from the schema
const User = mongoose.model('User', userSchema,);
const JobBoardDet= mongoose.model('JobDetails', JobBoardDetails,);

module.exports = {
	User,JobBoardDet
};