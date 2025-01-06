import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Config } from "./config/index.js";
import { ErrorHandlerMiddleware } from "./infrastructure/express/middleware/errorHandlerMiddleware.js";

const app = express();
const port = Config.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use(ErrorHandlerMiddleware);
