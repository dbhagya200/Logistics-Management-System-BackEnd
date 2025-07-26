import {Router} from "express";
import {
    createEmployee,
    deleteEmployee,
    getAllEmployees,
    getEmployeeByUsername,
    updateEmployee
} from "../controllers/employee.controller";
import {authorizeRole} from "../middleware/auth.middleware";



const employeeRouter:Router = Router();

employeeRouter.get("/all",authorizeRole("ADMIN"),getAllEmployees);
employeeRouter.post("/save",authorizeRole("ADMIN"),createEmployee);
employeeRouter.get("/get/:username",authorizeRole("ADMIN"),getEmployeeByUsername);
employeeRouter.put("/update/:username",authorizeRole("ADMIN"),updateEmployee);
employeeRouter.delete("/delete/:username",authorizeRole("ADMIN"),deleteEmployee);

export default employeeRouter;