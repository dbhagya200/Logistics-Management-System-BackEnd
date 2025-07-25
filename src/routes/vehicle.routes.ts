import {Router} from "express";
import {
    deleteVehicle,
    getAllVehicles,
    getVehicleByNumber,
    saveVehicle,
    updateVehicle
} from "../controllers/vehicle.controller";
import {authorizeRole} from "../middleware/auth.middleware";


const vehicleRouter:Router = Router();

vehicleRouter.get("/all",authorizeRole("ADMIN"),getAllVehicles);
vehicleRouter.post("/save",authorizeRole("ADMIN"),saveVehicle)
vehicleRouter.get("/get/:vehicle_number",authorizeRole("ADMIN"),getVehicleByNumber);
vehicleRouter.put("/update/:vehicle_number",authorizeRole("ADMIN"),updateVehicle);
vehicleRouter.delete("/delete/:vehicle_number",authorizeRole("ADMIN"),deleteVehicle);

export default vehicleRouter;