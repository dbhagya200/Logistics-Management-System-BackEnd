import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config();

const port = process.env.PORT;

DBConnection().then(result => console.log(result));


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});