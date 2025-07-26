import Job from "../model/job.model";
import {JobDTO} from "../dto/job.dto";

export const getAllJobs = async (): Promise<JobDTO[]> => {
    return Job.find();
}
export const createJob = async (job: JobDTO) => {
    return await Job.create(job);
}

export const getJobByUsername = async (username: string): Promise<any> => {
    return Job.findOne({cust_username: username});
}

export const updateJob = async (username: string, data: JobDTO) => {
    const job = await Job.findOneAndUpdate({cust_username: username}, data, {new: true});
    if (!job) {
        return null;
    }
    Object.assign(job, data);
    return job;
}

export const deleteJob = async (username: string) => {
    await Job.deleteOne({cust_username: username});
    return true;
}

/*
export const validateJob = (job: JobDTO) => {
    if (!job.cust_username || !job.pickup_location || !job.drop_location ||
        !job.status) {
        return "All fields are required";
    }
    return null;
}*/
