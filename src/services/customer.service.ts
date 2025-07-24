import Customer from "../model/customer.model";
import {CustomerDTO} from "../dto/customer.dto";

export const getAllCustomers = async ():Promise<CustomerDTO[]> =>{
    return Customer.find();
}


export const getCustomerByUsername = async (name:string):Promise<any> => {
    return Customer.findOne({username: name});
}

export const updateCustomer = async (name:string, data:CustomerDTO) => {
    const customer = await Customer.findOneAndUpdate({username: name}, data, {new: true});

    if (!customer) {
        return null;
    }
    Object.assign(customer, data);
    return customer;
}

export const deleteCustomer = async (name:string) => {
    await Customer.deleteOne({username: name});
    return true;
}

export const validateCustomer = (customer:CustomerDTO) => {
    if (!customer.fullName || !customer.username || !customer.password || !customer.nic ||
        !customer.phoneNumber || !customer.email || !customer.address || !customer.city ||
        !customer.postalCode ) {
        return "All fields are required";
    }
    return null;
}