import Userdb from "../models/usrModel.js";
import { createErrorMessage, createSuccessMessage } from "../helpers/errorHandlers.js";

// creating new user
export const createUser = async (req, res)=>{
    try{
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
        return createSuccessMessage({message: "User created sucessfuly", res, data:user});
    }
    catch(err){
        return createErrorMessage({message:err.message, res});
    }
}

export const getUser = async (req, res)=>{
    try{
        const user = await Userdb.find();
        if(!user[0]){
            return createErrorMessage({message:`No user found`, res, statusCode:404});
        }
        return createSuccessMessage({message: user, res, data:user});
    }
    catch(err){
        return createErrorMessage({message:err.message, res, data: null});
    }
}

export const updateUser = async (req, res) => {
    try {
        //validating request
        if (!req.body) {
            return createErrorMessage({message:"Content cannot be empty", res, statusCode:400});
          }
        const data = await Userdb.findByIdAndUpdate(req.params.id, req.body, {new:true}); // here the new:true returns the updated value
        if(!data){
            return createErrorMessage({message:`Cannot update user with it ${req.params.id}. Maybe user not found. `, res, statusCode:404})
        }
        return createSuccessMessage({message: "User updated sucessfully", res, data});

    } catch (error) {
        
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = await Userdb.findByIdAndDelete(req.params.id);
        if(!data){
            return createErrorMessage({message:`Cannot update delete with it ${req.params.id}. Maybe user not found. `, res, statusCode:404});

        }
        return createSuccessMessage({message: "sucessfully delted the user", res, data});
        
    } catch (error) {
        
    }
}