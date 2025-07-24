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



export const getUserByUsername = async (req:Request, res:Response) => {
    try{
        const username = req.params.username;
        const user = await userService.getUserByUsername(username);
        if(!user){
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
        const username = req.params.username;
        if(!username){
            res.status(404).json({error:"Invalid username"});
            return;
        }
        const user = req.body;
            const updatedUser = await userService.updateUser(username, user);
            if (!updatedUser) {
                res.status(404).json({error:"User not found"});
                return;
            }
            res.status(200).json(updatedUser);

    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    try {
        const username = req.params.username;
        if(!username){
            res.status(400).json({error:"Invalid username"});
            return;
        }
        const deleted = await userService.deleteUser(username);
        if (!deleted) {
            res.status(404).json({error:"User not found"});
            return;
        }
        res.status(200).json({message:"User deleted successfully"});
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}