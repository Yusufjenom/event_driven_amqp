import dotenv from "dotenv";
dotenv.config();

export const Config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  rabbitMQ: {
    url: "amqp://localhost",
    exchangeName: "logExchange",
  },
};
