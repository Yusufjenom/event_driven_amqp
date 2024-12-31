import express from "express";
import { Config } from "./config/index.js";
import { Producer } from "./producer.js";

const app = express();
const port = Config.port;
const producer = new Producer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/send-log", async (req, res) => {
  const { logType, message } = req.body;
  await producer.publishMessage(logType, message);
  res.status(200).json({
    success: true,
  });
});

app.listen(port, () => console.log(`server running on port: ${port}`));
