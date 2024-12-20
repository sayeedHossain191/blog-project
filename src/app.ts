import express, { Request, Response } from "express";
import cors from "cors";
import authRoute from "./modules/Auth/auth.route";
import userRoute from "./modules/User/user.route";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

const getAController = (req: Request, res: Response) => {
  res.send("Hello From Blog Site");
};

app.get("/", getAController);
app.use(globalErrorHandler);

export default app;
