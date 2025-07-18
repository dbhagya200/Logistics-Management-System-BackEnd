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

export const createCustomer = async (req:Request, res:Response) => {

}

export const getCustomerById = async (req:Request, res:Response) => {

}

export const updateCustomer = async (req:Request, res:Response) => {

}

export const deleteCustomer = async (req:Request, res:Response) => {

}