import mongoose from "mongoose";

const CustomerModel= new mongoose.Schema({
    "customerId":{
        autoIncrement:true,
        type:Number
    },
    "username":{
        required:true,
        type:String,
        unique:true,
        index:true
    },
    "password":{
        required:true,
        type:String
    },
    "fullName":{
        required:true,
        type:String
    },
    "nic":{
        required:true,
        type:String
    },
    "phoneNumber":{
        required:true,
        type:String
    },
    "email":{
        required:true,
        type:String
    },
    "address":{
        required:true,
        type:String
    },
    "city":{
        required:true,
        type:String
    },
    "postalCode":{
        required:true,
        type:String
    },
    "role":{
        type:String,
        default:"CUSTOMER"
    },
    "status":{
        type:String,
        default:"ACTIVE"
    }
});

const Customer = mongoose.model("Customer", CustomerModel);
export default Customer;