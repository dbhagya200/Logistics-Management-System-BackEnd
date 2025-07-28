import mongoose from "mongoose";
import Counter from "./counter.model";
import { LoadDTO } from "../dto/load.dto";

const LoadSchema = new mongoose.Schema<LoadDTO>({
    "load_id": {
        unique: true,
        type: Number
    },
    "cust_username": {
        type: String,
        required: true,
        index: true
    },
    "description": {
        type: String,
        required: true
    },
    "weight": {
        type: Number,
        required: true
    },
    "volume": {
        type: Number,
        required: true
    },
    "vehicle_number": {
        type: String,
    },
    "status": { // Added this field to match the job creation logic
        type: String,
        required: true,
        default: "PENDING"
    }
});

LoadSchema.pre("save", async function (next) {
    if (!this.isNew) return next();

    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: "load_id" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.load_id = counter.seq;
        next();
    } catch (err: any) {
        next(err);
    }
});

const Load = mongoose.model("Load", LoadSchema);
export default Load;