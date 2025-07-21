import {Router} from "express";
import {
    deleteCustomer,
    getAllCustomers,
    getCustomerByUsername,
    updateCustomer
} from "../controllers/customer.controller";

const customerRouter:Router = Router();

customerRouter.get("/all",getAllCustomers);
customerRouter.get("/get/:id",getCustomerByUsername);
customerRouter.put("/update/:id",updateCustomer);
customerRouter.delete("/delete/:id",deleteCustomer);

export default customerRouter;