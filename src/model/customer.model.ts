import mongoose from "mongoose";

const CustomerModel= new mongoose.Schema({
    "customer_id":{
        required:true,
        type:Number,
        unique:true,
        index:true,
        autoIncrement:true
    },
    "full_name":{
        required:true,
        type:String
    },
    "nic":{
        required:true,
        type:String
    },
    "phone_number":{
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
    "postal_code":{
        required:true,
        type:String
    }
});

const Customer = mongoose.model("Customer", CustomerModel);
export default Customer;