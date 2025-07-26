import {Router} from "express";
import {createLoad, deleteLoad, getAllLoads, getLoadByUsername, updateLoad} from "../controllers/load.controller";
import {authorizeRole} from "../middleware/auth.middleware";


const loadRouter: Router = Router();

loadRouter.get("/all", authorizeRole("ADMIN"), getAllLoads);
loadRouter.get("/get/:cust_username", authorizeRole("ADMIN"), getLoadByUsername);
loadRouter.post("/save", authorizeRole("ADMIN"), createLoad);
loadRouter.put("/update/:cust_username", authorizeRole("ADMIN"), updateLoad);
loadRouter.delete("/delete/:cust_username", authorizeRole("ADMIN"), deleteLoad);

export default loadRouter;
