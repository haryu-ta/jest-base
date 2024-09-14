import { Router } from "express";
import { getPostCode } from "../controllers/PostOfficeController";

const postOfficeRouters = Router();

postOfficeRouters.get("/", getPostCode);

export default postOfficeRouters;
