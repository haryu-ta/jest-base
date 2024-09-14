import express from "express";
import todoRouters from "./routes/todos"
import postOfficeRouters from "./routes/postoffice";
import { json } from "body-parser";


export const app = express();

app.use(json());

app.use("/todos", todoRouters);
app.use("/post", postOfficeRouters)

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({massage:err.message})
  }
);
app.listen(3000);

