import {Router} from "express";
import {deleteUser, getAllUsers, getUserByUsername, updateUser} from "../controllers/user.controller";
import {authorizeRole} from "../middleware/auth.middleware";

const userRouter:Router = Router();

userRouter.get("/all",authorizeRole("ADMIN"),getAllUsers);
userRouter.get("/get/:username",authorizeRole("ADMIN"),getUserByUsername)
userRouter.put("/update/:username",authorizeRole("ADMIN"),updateUser);
userRouter.delete("/delete/:username",authorizeRole("ADMIN"),deleteUser);

export default userRouter;