import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// app.use('/api/products', productRouter);
// app.use('/api/orders', orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send("Hello From Blog Site");
};

app.get("/", getAController);

export default app;
