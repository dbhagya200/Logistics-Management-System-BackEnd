import { JobDTO } from "./job.dto";
import { LoadDTO } from "./load.dto";

export interface JobWithLoadsDto {
    job: Omit<JobDTO, 'job_id' | 'job_date' | 'status'>;
    load: Omit<LoadDTO, 'load_id' >;
}