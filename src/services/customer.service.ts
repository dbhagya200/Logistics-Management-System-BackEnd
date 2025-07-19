import Customer from "../model/customer.model";
import {CustomerDTO} from "../dto/customer.dto";

export const getAllCustomers = async ():Promise<CustomerDTO[]> =>{
    return Customer.find();
}

export const saveCustomer = async (customer:CustomerDTO):Promise<CustomerDTO> => {
    return Customer.create(customer);
}

export const getCustomerById = async (id:number):Promise<any> => {
    return Customer.findById({id: id});
}

export const updateCustomer = async (id:number, data:CustomerDTO) => {
    const customer = await Customer.findOneAndUpdate({id: id}, data, {new: true});

    if (!customer) {
        return null;
    }
    Object.assign(customer, data);
    return customer;
}

export const deleteCustomer = async (id:number) => {
    await Customer.deleteOne({id: id});
    return true;
}

export const validateCustomer = (customer:CustomerDTO) => {
    if (!customer.full_name || !customer.nic || !customer.phone_number || !customer.email || !customer.address || !customer.city || !customer.postal_code) {
        return "All fields are required";
    }
    return true;
}