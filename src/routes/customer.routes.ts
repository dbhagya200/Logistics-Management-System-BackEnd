import {Router} from "express";
import {
    createCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer
} from "../controllers/customer.controller";

const customerRouter:Router = Router();

customerRouter.get("/all",getAllCustomers);
customerRouter.post("/create",createCustomer);
customerRouter.get("/get/:id",getCustomerById);
customerRouter.put("/update/:id",updateCustomer);
customerRouter.delete("/delete/:id",deleteCustomer);

export default customerRouter;