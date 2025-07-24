import User from "../model/user.model";
import {UserDTO} from "../dto/user.dto";

export const getAllEmployees = async ():Promise<UserDTO[]> => {
    return User.find({ role: "EMPLOYEE, ADMIN"});
}
export const getEmployeeByUsername = async (username:string):Promise<any> => {
    return User.findOne({username: username, role: "EMPLOYEE"});
}
export const updateEmployee = async (name:string, data:UserDTO) => {
    const employee = await User.findOneAndUpdate({username: name}, data, {new: true});
    if (!employee) {
        return null;
    }
    Object.assign(employee, data);
    return employee;
}
export const deleteEmployee = async (name:string) => {
    await User.deleteOne({username: name});
    return true;
}
export const validateEmployee = (employee:UserDTO) => {
    if (!employee.username || !employee.password || !employee.role || !employee.status) {
        return "All fields are required";
    }
    return null;
}