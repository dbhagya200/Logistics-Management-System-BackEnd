import Job from "../model/job.model";
import { JobDTO } from "../dto/job.dto";
import { JobWithLoadsDto} from "../dto/jobWithLoads.dto";
import { Document, Types } from "mongoose";
import {JobWithAssociatedLoadsDTO} from "../dto/JobWithAssociatedLoadsDTO";
import {LoadDTO} from "../dto/load.dto";
import Load from "../model/load.model";

export const getAllJobs = async (): Promise<JobDTO[]> => {
    return Job.find();
}

export const getAllJobsWithLoads = async (): Promise<JobWithAssociatedLoadsDTO[]> => {
    const jobs = await Job.find().lean() as JobDTO[];
    const loads = await Load.find().lean() as LoadDTO[];
    const jobsWithLoads: JobWithAssociatedLoadsDTO[] = jobs.map(job => ({
        ...job,
        loads: loads // Assign all loads for this customer to each job
    }));
    return jobsWithLoads;
}

export const getAllJobsWithLoadsByUsername = async (username: string): Promise<JobWithAssociatedLoadsDTO[]> => {
    const jobs = await Job.find({ cust_username: username }).lean() as JobDTO[];
    const loads = await Load.find({ cust_username: username }).lean() as LoadDTO[];
    const jobsWithLoads: JobWithAssociatedLoadsDTO[] = jobs.map(job => ({
        ...job,
        loads: loads // Assign all loads for this customer to each job
        // If loads were linked by job_id, you'd filter: loads.filter(load => load.job_id === job.job_id)
    }));

    return jobsWithLoads;
}

export const updateJobStatus = async (job_id: number, status: string) => {
    const job = await Job.findOneAndUpdate({job_id: job_id}, {status: status}, {new: true});
    if (!job) {
        return null;
    }
    Object.assign(job, {status: status});
    return job;
}

export const createJob = async (job: Omit<JobDTO, 'job_id'>): Promise<Document<unknown, {}, JobDTO> & JobDTO & { _id: Types.ObjectId }> => {
    return Job.create(job);
}

export const getJobByUsername = async (username: string): Promise<Document<JobDTO> | null> => {
    return Job.findOne({ cust_username: username });
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
