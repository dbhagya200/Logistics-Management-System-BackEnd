import express, {Express, Request, Response} from "express";
import cors from "cors";
import customersRoutes from "./routes/customer.routes";

const app: Express = express();

app.use(express.json()); //middleware
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean ) => void) => {
        if (!origin||allowedOrigins.includes(origin)){
            //postman eken en req
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions));
app.use("/api/customers",customersRoutes);

// 4. Expert the app to use outside (in index.ts)
export default app;