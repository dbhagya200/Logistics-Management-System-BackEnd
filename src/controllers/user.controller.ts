import {Request,Response} from "express";
import * as userService from "../services/user.service";

export const getAllUsers = async (req:Request, res:Response) => {
    try{
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const getUserById = async (req:Request, res:Response) => {
    try{
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            res.status(404).json({error:"Invalid user id"});
            return;
        }
        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({error:"User not found"});
            return;
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const updateUser = async (req:Request, res:Response) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            res.status(404).json({error:"Invalid user id"});
            return;
        }
        const user = req.body;
        const ValidationError = userService.validateUser(user);
        if (ValidationError) {
            res.status(400).json({error:ValidationError});
            return;
        } else {
            const updatedUser = await userService.updateUser(userId, user);
            if (!updatedUser) {
                res.status(404).json({error:"User not found"});
                return;
            }
            res.status(200).json(updatedUser);
        }
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            res.status(404).json({error:"Invalid user id"});
            return;
        }
        const deleted = await userService.deleteUser(userId);
        if (!deleted) {
            res.status(404).json({error:"User not found"});
            return;
        }
        res.status(200).json({message:"User deleted successfully"});
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}