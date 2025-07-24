import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    "userId": {
        autoIncrement: true,
        type: Number
    },
    "username":{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    "email":{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    "password":{
        type: String,
        required: true
    },
    "role":{
        type: String,
        required: true
    },
    "status":{
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserModel);
export default User;