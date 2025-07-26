import mongoose from "mongoose";

const LoadSchema = new mongoose.Schema({
    "load_id": {
        autoIncrement: true,
        type: Number
    },
    "cust_username":{
        type: String,
        required: true,
        index: true
    },
    "description":{
        type: String,
        required: true
    },
    "weight":{
        type: Number,
        required: true
    },
    "volume":{
        type: Number,
        required: true
    },
    "vehicle_number":{
        type: String,
        required: true
    }
});

const Load = mongoose.model("Load", LoadSchema);
export default Load;