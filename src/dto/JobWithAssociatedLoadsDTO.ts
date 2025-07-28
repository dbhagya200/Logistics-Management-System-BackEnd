import { JobDTO } from "./job.dto";
import { LoadDTO } from "./load.dto";

// This DTO represents a Job object augmented with its related Load(s) for fetching.
export interface JobWithAssociatedLoadsDTO extends JobDTO {
    loads: LoadDTO[]; // An array of loads associated with this job's customer
}