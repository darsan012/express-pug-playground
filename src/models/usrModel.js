import mongoose from "mongoose";

// creating the schema for the users
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    address1: {type: String, required: true},
    address2: {type: String},
    postalCode: {type: String, required: true},
    country : {type: String, required: true},
    phoneNumber : {type: String, required: true, unique: true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Invalid email format",
        ],
      },
    userNotes : {type: String},

})

// creating user model
const Userdb = mongoose.model("userdb", userSchema);
export default Userdb;