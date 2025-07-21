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
        const customerId = parseInt(req.params.id);
        if(isNaN(customerId)){
            res.status(404).json({error:"Invalid customer id"});
            return;
        }
        const customer = req.body;
        const ValidationError = customerService.validateCustomer(customer);
        if(ValidationError){
            res.status(400).json({error:ValidationError});
            return;
        }else {
            const updatedCustomer = await customerService.updateCustomer(customerId, customer);
            if(!updatedCustomer){
                res.status(404).json({error:"Customer not found"});
                return;
            }
            res.status(200).json(updatedCustomer);
        }
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}

export const deleteCustomer = async (req:Request, res:Response) => {
    try {
        const deleteId = parseInt(req.params.id);
        if(isNaN(deleteId)){
            res.status(404).json({error:"Invalid customer id"});
            return;
        }
        const isDeleted = await customerService.deleteCustomer(deleteId);
        if(!isDeleted){
            res.status(404).json({error:"Customer not found"});
            return;
        }
        res.status(200).json({message:"Customer deleted successfully"});
    }catch (error) {
        res.status(500).json({error:"Something went wrong"});
    }
}