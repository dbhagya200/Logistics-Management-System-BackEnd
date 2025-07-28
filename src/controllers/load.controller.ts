import { Request, Response } from "express"
import * as loadService from "../services/load.service";


export const getAllLoads = async (req:Request, res:Response) => {
    try {
        const jobs = await loadService.getAllLoads();
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching load:", error);
        res.status(500).json({ error: "Something went wrong while fetching load" });
    }
}

export const getLoadByUsername = async (req:Request, res:Response) => {
    try {
        const name = req.params.cust_username;
        const job = await loadService.getLoadByUsername(name);
        if (!job) {
            return res.status(404).json({ error: "load not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        console.error("Error fetching load:", error);
        res.status(500).json({ error: "Something went wrong while fetching the load" });
    }
}

export const createLoad = async (req:Request, res:Response) => {
    try {
        const newLoadData = req.body;
        // Basic validation
        if ( !newLoadData.description || !newLoadData.weight || !newLoadData.volume) {
            return res.status(400).json({ message: "Missing required load fields:  description, weight, volume." });
        }
        // Set default status if not provided, for consistency
        if (!newLoadData.status) {
            newLoadData.status = "PENDING";
        }
        const savedLoad = await loadService.createLoad(newLoadData);
        res.status(201).json(savedLoad);
    } catch (error) {
        console.error("Error creating load:", error);
        res.status(500).json({ message: "Something went wrong while creating the load", error: (error as Error).message });
    }
}

export const updateLoad = async (req:Request, res:Response) => {
    try {
        const name = req.params.cust_username;
        if (!name) {
            return res.status(400).json({ error: "Invalid username" });
        }
        const updatedLoadData = req.body;
        const updatedLoad = await loadService.updateLoad(name, updatedLoadData);
        if (!updatedLoad) {
            return res.status(404).json({ error: "Load not found" });
        }
        res.status(200).json(updatedLoad);
    } catch (error) {
        console.error("Error updating load:", error);
        res.status(500).json({ error: "Something went wrong while updating the load" });
    }
}

export const deleteLoad = async (req:Request, res:Response) => {
    try {
        const name = req.params.cust_username;
        if (!name) {
            return res.status(400).json({ error: "Invalid username" });
        }
        const isDeleted = await loadService.deleteLoad(name);
        if (!isDeleted) {
            return res.status(404).json({ error: "Load not found" });
        }
        res.status(200).json({ message: "Load deleted successfully" });
    } catch (error) {
        console.error("Error deleting load:", error);
        res.status(500).json({ error: "Something went wrong while deleting the load" });
    }
}
