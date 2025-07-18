import Customer from "../model/customer.model";
import {CustomerDTO} from "../dto/customer.dto";

export const getAllCustomers = async ():Promise<CustomerDTO[]> =>{
    return Customer.find();
}