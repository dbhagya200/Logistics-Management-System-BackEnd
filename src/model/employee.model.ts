import mongoose from "mongoose";

const EmployeeModel = new mongoose.Schema({
    "employeeId": {
        autoIncrement: true,
        type: Number
    },
    "username": {
        required: true,
        type: String,
        unique: true,
        index: true
    },
    "password": {
        required: true,
        type: String
    },
    "fullName": {
        required: true,
        type: String
    },
    "email": {
        required: true,
        type: String,
        unique: true,
        index: true
    },
    "nic": {
        required: true,
        type: String,
        unique: true,
        index: true
    },
    "address": {
        required: true,
        type: String
    },
    "phoneNumber": {
        required: true,
        type: String
    },
    "role": {
        type: String,
        default:"EMPLOYEE"

    },
    "status": {
        type: String,
        default: "ACTIVE"
    }
});

const Employee = mongoose.model("Employee", EmployeeModel);
export default Employee;
