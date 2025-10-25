import express from "express";
import { Signin, Signup, Verify } from "../controllers/userControllers.js";


const router = express.Router()


router.post('/signup',Signup)
router.get('/verify/:verificationToken',Verify)
router.post('/signin',Signin)


export default router