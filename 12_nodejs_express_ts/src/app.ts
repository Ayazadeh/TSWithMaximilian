import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRouter from "./routes/todos";

const app = express();

app.use(json());

app.use("/todos", todoRouter);

// error handling middleware    
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000);
