import express, {Express, Request, Response} from "express";
import cors from "cors";
import customersRoutes from "./routes/customer.routes";
import userRoutes from "./routes/user.routes";
import {authenticateToken} from "./middleware/auth.middleware";
import authRoutes from "./routes/auth.routes";
import employeesRoutes from "./routes/employee.routes";
import vehiclesRoutes from "./routes/vehicle.routes";

const app: Express = express();

app.use(express.json()); //middleware
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean ) => void) => {
        if (!origin||allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions));
app.use("/api/auth",authRoutes)
app.use("/api/user",authenticateToken,userRoutes)
app.use("/api/customer",authenticateToken,customersRoutes);
app.use("/api/employee",authenticateToken,employeesRoutes);
app.use("/api/vehicle",authenticateToken,vehiclesRoutes)


// 4. Expert the app to use outside (in index.ts)
export default app;