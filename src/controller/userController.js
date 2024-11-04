import Userdb from "../models/usrModel.js";
import { createErrorMessage, createSuccessMessage } from "../helpers/errorHandlers.js";

// creating new user
export const createUser = async (req, res)=>{
    try{
        console.log("Hello there!");
        //validating request
        if(!req.body){
            return createErrorMessage({message:"Content cannot be empty", res});
        }
        // creating user
        const user = new Userdb({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            address1: req.body.address1,
            address2: req.body.address2,
            postalCode: req.body.postalCode,
            country : req.body.country,
            phoneNumber : req.body.phoneNumber,
            email: req.body.email,
            userNotes : req.body.userNotes
        })

        await user.save();
        return createSuccessMessage({message: user, res})
    }
    catch(err){
        return createErrorMessage({message:err.message, res});
    }
}