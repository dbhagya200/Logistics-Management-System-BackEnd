import app from "./app";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Loads the environment variables from the file

const port = process.env.PORT; // Access the port defined in .env

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});