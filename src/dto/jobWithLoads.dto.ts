import { JobDTO } from "./job.dto";
import { LoadDTO } from "./load.dto";

// This DTO is used when a single API call creates both a job and its initial load
export interface JobWithLoadsDto {
    job: Omit<JobDTO, 'job_id' | 'job_date' | 'status'>; // Exclude auto-generated/default fields from request body
    load: Omit<LoadDTO, 'load_id' >; // Exclude auto-generated/derived fields
}