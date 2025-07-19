import User from "../model/user.model";
import {UserDTO} from "../dto/user.dto";


export const getAllUsers = async ():Promise<UserDTO[]> => {
    return User.find();
}

export const getUserById = async (id:number):Promise<any> => {
    return User.findById({id: id});
}

export const updateUser = async (id:number, data:UserDTO) => {
    const user = await User.findOneAndUpdate({id: id}, data, {new: true});
    if (!user) {
        return null;
    }
    Object.assign(user, data);
    return user;
}

export const deleteUser = async (id:number) => {
    await User.deleteOne({id: id});
    return true;
}

export const validateUser = (user:UserDTO) => {
    if (!user.username || !user.password || !user.role || !user.status) {
        return "All fields are required";
    }
    return true;
}