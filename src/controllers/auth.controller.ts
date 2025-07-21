import {Request, Response} from 'express';
import * as authService from '../services/auth.service';
import * as customerService from '../services/customer.service';
import bcrypt from "bcryptjs";
import User from "../model/user.model";


export const authenticateUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const authTokens = await authService.authenticateUser(username, password);

        res.json(authTokens);

    } catch (error: any) {
        console.error("Authentication failed:", error.message);
        res.status(401).json({ error: error.message || 'Invalid credentials' });
    }
};


export const registerUser = async (req :Request , res: Response) => {
    try{
        const newUser = req.body;
        const validationError = authService.validateUser(newUser);
        if (validationError) {
            res.status(400).json({error: validationError});
            return;
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10);

        const savedUser = await authService.registerUser(newUser);
        res.status(201).json(savedUser);
    }catch (error){
        console.log(error);
        res.status(500).json({error: "Something went wrong"});
    }

}

export const customerRegister = async (req: Request, res: Response) => {
    try {
        const newCustomer = req.body;

        const validationError = customerService.validateCustomer(newCustomer);
        if (validationError) {
            return res.status(400).json({ message: "Validation failed", errors: [{ field: "form", message: validationError }] });
        }

        const hashedPassword= bcrypt.hashSync(newCustomer.password, 10);
        newCustomer.password = hashedPassword;
        const savedCustomer = await authService.customerRegister(newCustomer);
        console.log("Customer saved:", savedCustomer);
        const newUser = {
            username: newCustomer.username, // or use newCustomer.email
            password: hashedPassword,
            role: "CUSTOMER",
            status: "ACTIVE",
        };
         await User.create(newUser);
        res.status(201).json(savedCustomer);

    } catch (error: any) {
        console.error("Registration failed:", error);
        if (error.code === 11000) {
            res.status(400).json({ message: "Username or email already exists" });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};