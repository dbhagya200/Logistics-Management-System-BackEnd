import { Request, Response } from "express"
import { JobWithLoadsDto } from "../dto/jobWithLoads.dto";
import * as jobService from "../services/job.service";
import * as loadService from "../services/load.service";
import {JobWithAssociatedLoadsDTO} from "../dto/JobWithAssociatedLoadsDTO";

export const getAllJobs = async (req:Request, res:Response) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ error: "Something went wrong while fetching jobs" });
    }
}


export const getAllJobsWithLoads = async (req: Request, res: Response) => {
    try {
        const jobsWithLoads = await jobService.getAllJobsWithLoads();
        res.status(200).json(jobsWithLoads);
    } catch (error) {
        console.error("Error fetching jobs with loads:", error);
        res.status(500).json({ message: "Something went wrong while fetching jobs and their loads." });
    }
}

export const getJobAndLoad = async (req: Request, res: Response) => {
    try {
        const username = req.params.cust_username;
        if (!username) {
            return res.status(400).json({ message: "Customer username is required." });
        }

        const jobsWithLoads: JobWithAssociatedLoadsDTO[] = await jobService.getAllJobsWithLoadsByUsername(username);

        if (!jobsWithLoads || jobsWithLoads.length === 0) {
            return res.status(404).json({ message: "No jobs found for this customer." });
        }

        res.status(200).json(jobsWithLoads);
    } catch (error) {
        console.error("Error fetching job with loads:", error);
        res.status(500).json({ message: "Something went wrong while fetching jobs and their loads." });
    }
}

export const updateJobStatus = async (req:Request, res:Response) => {
    try {
        const jobId = parseInt(req.params.job_id);
        const status = req.params.status;
        const updatedJob = await jobService.updateJobStatus(jobId, status);
        if (!updatedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        console.error("Error updating job status:", error);
        res.status(500).json({ error: "Something went wrong while updating the job status" });
    }
}

export const getJobByUsername = async (req:Request, res:Response) => {
    try {
        const username = req.params.cust_username;
        const job = await jobService.getJobByUsername(username);
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        console.error("Error fetching job:", error);
        res.status(500).json({ error: "Something went wrong while fetching the job" });
    }
}

/*export const createJob = async (req:Request, res:Response) => {
    try {
        const newJob:JobWithLoadsDto = req.body;
      /!*  const validationError = jobService.validateJob(newJob);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }*!/

        const savedJob = await jobService.createJob(newJob);
        const newLoad ={
            cust_username: savedJob.cust_username,
            job_date: savedJob.job_date,
            pickup_location: savedJob.pickup_location,
            drop_location: savedJob.drop_location,
            status: savedJob.status
        }
        await Load.create(newLoad);
        res.status(201).json(savedJob);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Something went wrong while creating the job" });
    }
}*/

export const createJob = async (req: Request, res: Response) => {
    try {
        const { job, load }: JobWithLoadsDto = req.body;

        if (!job || !job.cust_username || !job.pickup_location || !job.drop_location ||
            !load || !load.description || !load.weight || !load.volume) {
            return res.status(400).json({ message: "Missing required job or load data." });
        }

        const savedJob = await jobService.createJob({
            cust_username: job.cust_username,
            pickup_location: job.pickup_location,
            drop_location: job.drop_location,
            job_date: new Date(),
            status: "PENDING"
        });


        await loadService.createLoad({
            cust_username: savedJob.cust_username,
            description: load.description,
            weight: load.weight,
            volume: load.volume,
            vehicle_number: load.vehicle_number,
            status: "PENDING"
        });

        res.status(201).json(savedJob);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ message: "Something went wrong while creating the job and load", error: (error as Error).message });
    }
};


export const updateJob = async (req:Request, res:Response) => {
    try {
        const username = req.params.cust_username;
       if (!username) {
           return res.status(400).json({ error: "Invalid username" });
       }
        const updatedJobData = req.body;
        const updatedJob = await jobService.updateJob(username, updatedJobData);
        if (!updatedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ error: "Something went wrong while updating the job" });
    }
}

export const deleteJob = async (req:Request, res:Response) => {
    try {
        const username = req.params.cust_username;
        if (!username) {
            return res.status(400).json({ error: "Invalid username" });
        }
        const isDeleted = await jobService.deleteJob(username);
        if (!isDeleted) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ error: "Something went wrong while deleting the job" });
    }
}