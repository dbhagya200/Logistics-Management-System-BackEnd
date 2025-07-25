import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    "vehicle_id": {
        autoIncrement: true,
        type: Number
    },
    "vehicle_number": {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    "vehicle_type": {
        type: String,
        required: true
    },
    "capacity": {
        type: Number,
        required: true
    },
    "status": {
        type: String,
        required: true,
        default: "AVAILABLE"
    }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;