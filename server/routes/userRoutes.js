import { Router } from "express";
const router = Router()
import { register,login,logout,getProfile,forgotPassword,resetPassword,changePassword,updateUser} from "../controllers/userController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";


router.post('/register',upload.single("avatar"),register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/me',isLoggedIn,getProfile)

router.post('/reset',forgotPassword);
router.post('/reset/:resetToken',resetPassword);
router.post('/change-password',isLoggedIn,changePassword)

router.put('/update/:id',isLoggedIn,upload.single('avatar'),updateUser)
export default router;