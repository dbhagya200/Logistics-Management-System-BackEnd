import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    "job_id": {
        autoIncrement: true,
        type: Number
    },
    "cust_username":{
        type: String,
        required: true,
        index: true
    },
    "pickup_location":{
        type: String,
        required: true
    },
    "drop_location":{
        type: String,
        required: true
    },
    "job_date":{
        type: Date,
        autoCreate: true
    },
    "status":{
        type: String,
        required: true,
        default: "PENDING"
    }
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
