import {Router} from "express";
import {deleteUser, getAllUsers, getUserByUsername, updateUser} from "../controllers/user.controller";
import {authorizeRole} from "../middleware/auth.middleware";

const userRouter:Router = Router();

userRouter.get("/all",authorizeRole("admin"),getAllUsers);
userRouter.get("/get/:id",authorizeRole("admin"),getUserByUsername)
userRouter.put("/update/:id",authorizeRole("admin"),updateUser);
userRouter.delete("/delete/:id",authorizeRole("admin"),deleteUser);

export default userRouter;