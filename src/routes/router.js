import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/userController.js";

const router = Router();

// crud operations on the user data
router.get('/',(req, res)=>{res.send("Server is running sucessful")}); 
router.get('/user',getUser); 
router.post('/user',createUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

export default router;
