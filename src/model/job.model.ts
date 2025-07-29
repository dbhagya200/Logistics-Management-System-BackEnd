import mongoose from "mongoose";
import Counter from "./counter.model";
import { JobDTO } from "../dto/job.dto";

const jobSchema = new mongoose.Schema<JobDTO>({
    "job_id": {
        unique: true,
        type: Number
    },
    "cust_username": {
        type: String,
        required: true,
        index: true
    },
    "pickup_location": {
        type: String,
        required: true
    },
    "drop_location": {
        type: String,
        required: true
    },
    "job_date": {
        type: Date,
        default: Date.now
    },
    "status": {
        type: String,
        required: true,
        default: "PENDING"
    }
});

jobSchema.pre("save", async function (next) {
    if (!this.isNew) return next();

    try {
        const counter = await Counter.findByIdAndUpdate(
            { _id: "job_id" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.job_id = counter.seq;
        next();
    } catch (err: any) {
        next(err);
    }
});

const Job = mongoose.model("Job", jobSchema);
export default Job;