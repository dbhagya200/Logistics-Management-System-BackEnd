import  ContactMessage  from "../model/contact.model";
import { ContactFormDTO } from "../dto/contact.dto";

export const getAllContacts = async (): Promise<ContactFormDTO[]> => {
    return ContactMessage.find();
}

export const getContactByUsername = async (username: string): Promise<any> => {
    return ContactMessage.findOne({ username: username });
}

export const createContact = async (contact: ContactFormDTO) => {
    return ContactMessage.create(contact);
}

export const deleteContact = async (name: string) => {
    return ContactMessage.findByIdAndDelete(name);
}
