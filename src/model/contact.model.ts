import mongoose from "mongoose";

const contactModel = new mongoose.Schema({

    "username": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
        lowercase: true,
        match: [/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address']
    },
    "message": {
        type: String,
        required: true,
        maxlength: 1000
    },
    "createdAt": {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });



// Create and export the Mongoose model
const ContactMessage = mongoose.model("ContactMessage", contactModel);
export default ContactMessage;