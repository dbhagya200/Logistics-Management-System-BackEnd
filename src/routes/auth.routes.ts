import {Router} from "express";
import {authenticateUser, customerRegister, registerUser} from "../controllers/auth.controller";


const authRouter : Router = Router();

authRouter.post("/login",authenticateUser);
authRouter.post("/register",registerUser); // This should be a different controller for registration
authRouter.post("/custRegister",customerRegister)

export default authRouter