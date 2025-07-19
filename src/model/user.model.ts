import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    "user_id":{
        type: Number,
        required: true,
        unique: true,
        index: true,
        autoIncrement: true
    },
    "username":{
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