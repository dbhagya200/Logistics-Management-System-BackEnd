import {Request,Response} from "express";
import * as vehicleService from "../services/vehicle.service";

export const getAllVehicles = async (req:Request, res:Response) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        res.status(500).json({ error: "Something went wrong while fetching vehicles" });
    }
}

export const saveVehicle = async (req:Request, res:Response) => {
    try {
        const newVehicle = req.body;
        const validationError = vehicleService.validateVehicle(newVehicle);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        const savedVehicle = await vehicleService.saveVehicle(newVehicle);
        res.status(201).json(savedVehicle);
    } catch (error) {
        console.error("Error saving vehicle:", error);
        res.status(500).json({ error: "Something went wrong while saving the vehicle" });
    }
}

export const getVehicleByNumber = async (req:Request, res:Response) => {
    try {
        const vehicleNumber = req.params.vehicle_number;
        const vehicle = await vehicleService.getVehicleByNumber(vehicleNumber);
        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle not found" });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        console.error("Error fetching vehicle:", error);
        res.status(500).json({ error: "Something went wrong while fetching the vehicle" });
    }
}

export const updateVehicle = async (req:Request, res:Response) => {
    try {
        const vehicleNumber = req.params.vehicle_number;
        if (!vehicleNumber) {
            return res.status(400).json({ error: "Invalid vehicle number" });
        }
        const updatedVehicleData = req.body;
        const validationError = vehicleService.validateVehicle(updatedVehicleData);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        const updatedVehicle = await vehicleService.updateVehicle(vehicleNumber, updatedVehicleData);
        if (!updatedVehicle) {
            return res.status(404).json({ error: "Vehicle not found" });
        }
        res.status(200).json(updatedVehicle);
    } catch (error) {
        console.error("Error updating vehicle:", error);
        res.status(500).json({ error: "Something went wrong while updating the vehicle" });
    }
}

export const deleteVehicle = async (req:Request, res:Response) => {
    try {
        const vehicleNumber = req.params.vehicle_number;
        if (!vehicleNumber) {
            return res.status(400).json({ error: "Invalid vehicle number" });
        }
        const deleted = await vehicleService.deleteVehicle(vehicleNumber);
        if (!deleted) {
            return res.status(404).json({ error: "Vehicle not found" });
        }
        res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        res.status(500).json({ error: "Something went wrong while deleting the vehicle" });
    }
}