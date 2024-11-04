import { Router } from "express";
import { createUser } from "../controller/userController.js";

const router = Router();

// crud operations on the user data
router.get('/',(req, res)=>{res.send("Server is running sucessful")}); 
router.get('/user',()=>{}); 
router.post('/user',createUser);
router.put('/user/:id',()=>{});
router.delete('/user/:id',()=>{});

export default router;
