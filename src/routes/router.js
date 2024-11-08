import { Router } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controller/userController.js";
import Userdb from "../models/usrModel.js";

const router = Router();

// crud operations on the user data
// rendering add-user page
router.get('/add',(req, res)=>{res.render('add-user')}); 

router.post('/add',createUser);

router.get('/',getUser); 
router.get('/update/:id', async (req, res) => {
    const user = await Userdb.findById(req.params.id);
    const dob = user.dateOfBirth;
    // formatting date to be on dd/mm/yyyy format
    const formattedDate = user.dateOfBirth ? user.dateOfBirth.toISOString().split('T')[0] : '';
    console.log(user.userNotes)
    return res.render('update-user', { user, formattedDate });
  });
router.post('/update/:id',updateUser);
router.post('/delete/:id',deleteUser);



export default router;
