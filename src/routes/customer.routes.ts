import {Router} from "express";
import {
    deleteCustomer,
    getAllCustomers,
    getCustomerByUsername,
    updateCustomer
} from "../controllers/customer.controller";
import {authorizeRole} from "../middleware/auth.middleware";

const customerRouter:Router = Router();

customerRouter.get("/all",getAllCustomers);
customerRouter.get("/get/:username",authorizeRole("ADMIN","CUSTOMER"),getCustomerByUsername);
customerRouter.put("/update/:username",authorizeRole("ADMIN","CUSTOMER"),updateCustomer);
customerRouter.delete("/delete/:username",authorizeRole("ADMIN","CUSTOMER"),deleteCustomer);

export default customerRouter;