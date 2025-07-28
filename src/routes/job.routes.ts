import {Router} from "express";
import {
    createJob,
    deleteJob,
    getAllJobs, getAllJobsWithLoads,
    getJobAndLoad,
    getJobByUsername,
    updateJob, updateJobStatus
} from "../controllers/job.controller";
import {authorizeRole} from "../middleware/auth.middleware";


const jobRouter:Router = Router();

jobRouter.get("/all",authorizeRole("ADMIN"),getAllJobs);
jobRouter.get("/getAll",authorizeRole("ADMIN"),getAllJobsWithLoads);
jobRouter.get("/get/:cust_username",authorizeRole("ADMIN"),getJobByUsername);
jobRouter.get("/getLoad/:cust_username",authorizeRole("ADMIN"),getJobAndLoad);
jobRouter.post("/save",createJob);
jobRouter.put("/update/:cust_username",updateJob);
jobRouter.put("/update/:job_id",updateJobStatus);
jobRouter.delete("/delete/:cust_username",deleteJob);

export default jobRouter;