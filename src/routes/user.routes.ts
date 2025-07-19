import {Router} from "express";
import {deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/user.controller";

const userRouter:Router = Router();

userRouter.get("/all",getAllUsers);
userRouter.get("/get/:id",getUserById)
userRouter.put("/update/:id",updateUser);
userRouter.delete("/delete/:id",deleteUser);

export default userRouter;