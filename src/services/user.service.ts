import User from "../model/user.model";
import {UserDTO} from "../dto/user.dto";


export const getAllUsers = async ():Promise<UserDTO[]> => {
    return User.find();
}

export const getUserByUsername = async (username:string) => {
    return User.findOne({username: username});
}

export const updateUser = async (name:string, data:UserDTO) => {
    const user = await User.findOneAndUpdate({username: name}, data, {new: true});
    if (!user) {
        return null;
    }
    Object.assign(user, data);
    return user;
}

export const deleteUser = async (name:string) => {
    await User.deleteOne({username: name});
    return true;
}

export const validateUser = (user:UserDTO) => {
    if (!user.username || !user.password || !user.role || !user.status) {
        return "All fields are required";
    }
    return true;
}