import {Router} from "express";
import {createContact, deleteContact, getAllContacts} from "../controllers/contact.controller";
import {authorizeRole} from "../middleware/auth.middleware";
import {getContactByUsername} from "../services/contact.service";

const contactRouter:Router = Router();

contactRouter.get("/all", authorizeRole("ADMIN"), getAllContacts);
contactRouter.get("/get/:username", authorizeRole("ADMIN"), getContactByUsername);
contactRouter.post("/save", authorizeRole("CUSTOMER"), createContact);
contactRouter.delete("/delete/:username", authorizeRole("ADMIN"), deleteContact);

export default contactRouter;