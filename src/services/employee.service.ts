import Employee from "../model/employee.model";
import {EmployeeDTO} from "../dto/employee.dto";
import User from "../model/user.model";

export const getAllEmployees = async ():Promise<EmployeeDTO[]> => {
    return Employee.find();
}

export const createEmployee = async (employee: EmployeeDTO) => {
    return await Employee.create(employee);
}

export const getEmployeeByUsername = async (username:string):Promise<any> => {
    return Employee.findOne({username: username});
}
export const updateEmployee = async (name:string, data:EmployeeDTO) => {
    const employee = await Employee.findOneAndUpdate({username: name}, data, {new: true});
    if (!employee) {
        return null;
    }
    Object.assign(employee, data);
    return employee;
}
export const deleteEmployee = async (name:string) => {
    await Employee.deleteOne({username: name});
    await User.deleteOne({username: name});
    return true;
}
export const validateEmployee = (employee:EmployeeDTO) => {
    if (!employee.username || !employee.password || !employee.role || !employee.status) {
        return "All fields are required";
    }
    return null;
}