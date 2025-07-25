import {Router} from "express";
import {createJob, deleteJob, getAllJobs, getJobByUsername, updateJob} from "../controllers/job.controller";
import {authorizeRole} from "../middleware/auth.middleware";


const jobRouter:Router = Router();

jobRouter.get("/all",authorizeRole("ADMIN"),getAllJobs);
jobRouter.get("/get/:cust_username",getJobByUsername);
jobRouter.post("/save",createJob);
jobRouter.put("/update/:cust_username",updateJob);
jobRouter.delete("/delete/:cust_username",deleteJob);

export default jobRouter;