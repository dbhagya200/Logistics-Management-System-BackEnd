import { Request, Response } from "express"
import * as jobService from "../services/job.service";

export const getAllJobs = async (req:Request, res:Response) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ error: "Something went wrong while fetching jobs" });
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

export const createJob = async (req:Request, res:Response) => {
    try {
        const newJob = req.body;
        const validationError = jobService.validateJob(newJob);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        const savedJob = await jobService.createJob(newJob);
        res.status(201).json(savedJob);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Something went wrong while creating the job" });
    }
}

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