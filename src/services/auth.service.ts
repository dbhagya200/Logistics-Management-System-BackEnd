import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/user.model";
import Customer from "../model/customer.model";
import {UserDTO} from "../dto/user.dto";
import {getUserByUsername} from "./user.service";
import {CustomerDTO} from "../dto/customer.dto";


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

const refreshTokens = new Set<string>();

export const authenticateUser = async (username: string, password: string) => {
    const existingUser = await getUserByUsername(username);

    let isValidPassword = bcrypt.compareSync(password, existingUser?.password as string);

    if (!existingUser || !isValidPassword) {
        return null;
    }

    const accessToken = jwt.sign({
        username: existingUser.username,
        role: existingUser.role
    }, JWT_SECRET, { expiresIn: "1d" });

    const refreshToken = jwt.sign({
        username: existingUser.username,
    }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

    refreshTokens.add(refreshToken);

    return {
        accessToken,
        refreshToken
    };

}
export const registerUser = async (user: UserDTO) => {
    return await User.create(user);
}

export const customerRegister = async (customer: CustomerDTO) => {
    return await Customer.create(customer);
}

export const validateUser = (user : UserDTO) => {
    if (!user.username || !user.password || !user.role || !user.status) {
        return "All fields are required";
    }
    return null;
}