import { JobDTO } from "./job.dto";
import { LoadDTO } from "./load.dto";

export interface JobWithAssociatedLoadsDTO extends JobDTO {
    loads: LoadDTO[];
}