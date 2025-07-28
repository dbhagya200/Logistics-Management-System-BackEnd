import { Request, Response } from "express";
import * as contactService from "../services/contact.service";


export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await contactService.getAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: "Something went wrong while fetching contacts" });
    }
}



export const createContact = async (req: Request, res: Response) => {
    try {
        const contactData = req.body;
        const newContact = await contactService.createContact(contactData);
        res.status(201).json(newContact);
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Something went wrong while creating the contact" });
    }
}

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const contactId = req.params.id;
        const deletedContact = await contactService.deleteContact(contactId);
        if (!deletedContact) {
            return res.status(404).json({ error: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({ error: "Something went wrong while deleting the contact" });
    }
}