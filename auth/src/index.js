import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Config } from "./config/index.js";
import { ErrorHandlerMiddleware } from "./infrastructure/express/middleware/errorHandlerMiddleware.js";
import { connectDb } from "./infrastructure/database/index.js";
import UserRouter from "./infrastructure/express/routes/user.js";

const app = express();
const port = Config.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use("/api/v1", UserRouter);
app.use(ErrorHandlerMiddleware);

app.listen(port, async () => {
  await connectDb();
  console.log(`server running on port: ${port}`);
});
