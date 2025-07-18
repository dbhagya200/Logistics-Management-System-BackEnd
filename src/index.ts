import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection"; // Import dotenv

dotenv.config(); // Loads the environment variables from the file

const port = process.env.PORT; // Access the port defined in .env

DBConnection().then(result => console.log(result));


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});