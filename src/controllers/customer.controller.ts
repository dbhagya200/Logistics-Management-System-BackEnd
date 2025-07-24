import {Request,Response} from "express";
import * as customerService from "../services/customer.service";

export const getAllCustomers = async (req:Request, res:Response) => {
    try{
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    }catch(error){
        res.status(500).json({error:"Error fetching customers"});
    }
}


export const getCustomerByUsername = async (req:Request, res:Response) => {
    try{
        const username = req.params.username;

        const customer = await customerService.getCustomerByUsername(username);
        if(!customer){
            res.status(404).json({error:"Customer not found"});
            return;
        }
        res.status(200).json(customer);
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const updateCustomer = async (req:Request, res:Response) => {
    try {
        const custName = req.params.username;
        if(!custName){
            res.status(400).json({error:"Invalid customer username"});
            return;
        }
        const customer = req.body;
            const updatedCustomer = await customerService.updateCustomer(custName, customer);
            if(!updatedCustomer){
                res.status(404).json({error:"Customer not found"});
                return;
            }
            res.status(200).json(updatedCustomer);
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteCustomer = async (req:Request, res:Response) => {
    try {
        const username = req.params.username;
        if(!username){
            res.status(400).json({error:"Invalid customer username"});
            return;
        }
        const isDeleted = await customerService.deleteCustomer(username);
        if(!isDeleted){
            res.status(404).json({error:"Customer not found"});
            return;
        }
        res.status(200).json({message:"Customer deleted successfully"});
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}