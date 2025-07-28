import express, {Express, Request, Response} from "express";
import cors from "cors";
import customersRoutes from "./routes/customer.routes";
import userRoutes from "./routes/user.routes";
import {authenticateToken} from "./middleware/auth.middleware";
import authRoutes from "./routes/auth.routes";
import employeesRoutes from "./routes/employee.routes";
import vehiclesRoutes from "./routes/vehicle.routes";
import jobRoutes from "./routes/job.routes";
import loadRoutes from "./routes/load.routes";
import contactRouter from "./routes/contact.routes";

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
app.use("/api/job",authenticateToken,jobRoutes)
app.use("/api/load",authenticateToken,loadRoutes)
app.use("/api/contact",authenticateToken,contactRouter)


export default app;