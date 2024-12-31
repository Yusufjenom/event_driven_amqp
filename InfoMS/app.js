//import express from "express";
import amqp from "amqplib";

// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const consumeMessage = async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange("logExchange", "direct");

  const queue = await channel.assertQueue("InfoQueue");
  await channel.bindQueue(queue.queue, "logExchange", "Info");

  await channel.consume(queue.queue, (msg) => {
    const data = JSON.parse(msg.content);
    console.log(data);
    channel.ack(msg);
  });
};

// app.get("/test", async (req, res) => {
//   const data = await consumeMessage();
//   res.status(200).json({
//     success: true,
//     message: data,
//   });
// });
consumeMessage();
//app.listen(port, () => console.log(`server running on port: ${port}`));
