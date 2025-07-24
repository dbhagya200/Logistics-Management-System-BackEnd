import {Request,Response} from "express";
import * as employeeService from "../services/employee.service";

export const getAllEmployees = async (req:Request, res:Response) => {
    try {
   const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: "Something went wrong while fetching employees" });
    }
}


export const getEmployeeByUsername = async (req:Request, res:Response) => {
    try {
        const username = req.params.username;
        const employee = await employeeService.getEmployeeByUsername(username);
        if (!employee) {
            res.status(404).json({ error: "Employee not found" });
            return;
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).json({ error: "Something went wrong while fetching the employee" });
    }
}

export const updateEmployee = async (req:Request, res:Response) => {
    try {
        const username = req.params.username;
        if (!username) {
            res.status(400).json({ error: "Invalid username" });
            return;
        }
        const employee = req.body;
            const updatedEmployee = await employeeService.updateEmployee(username, employee);
            if (!updatedEmployee) {
                res.status(404).json({ error: "Employee not found" });
                return;
            }
            res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ error: "Something went wrong while updating the employee" });
    }

}

export const deleteEmployee = async (req:Request, res:Response) => {

    try {
        const username = req.params.username;
        if (!username) {
            res.status(400).json({ error: "Invalid username" });
            return;
        }
        const deleted = await employeeService.deleteEmployee(username);
        if (!deleted) {
            res.status(404).json({ error: "Employee not found" });
            return;
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ error: "Something went wrong while deleting the employee" });
    }
}
