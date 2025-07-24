import {Router} from "express";
import {
    deleteEmployee,
    getAllEmployees,
    getEmployeeByUsername,
    updateEmployee
} from "../controllers/employee.controller";
import {authorizeRole} from "../middleware/auth.middleware";



const employeeRouter:Router = Router();

employeeRouter.get("/all",authorizeRole("admin"),getAllEmployees);
employeeRouter.get("/get/:username",authorizeRole("admin"),getEmployeeByUsername);
employeeRouter.put("/update/:username",authorizeRole("admin"),updateEmployee);
employeeRouter.delete("/delete/:username",authorizeRole("admin"),deleteEmployee);

export default employeeRouter;