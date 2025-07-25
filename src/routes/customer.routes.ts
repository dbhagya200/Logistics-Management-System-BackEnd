import {Router} from "express";
import {
    deleteCustomer,
    getAllCustomers,
    getCustomerByUsername,
    updateCustomer
} from "../controllers/customer.controller";

const customerRouter:Router = Router();

customerRouter.get("/all",getAllCustomers);
customerRouter.get("/get/:username",getCustomerByUsername);
customerRouter.put("/update/:username",updateCustomer);
customerRouter.delete("/delete/:username",deleteCustomer);

export default customerRouter;