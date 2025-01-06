import amqp from "amqplib";

export const consumeMessage = async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange("logExchange", "direct");

  const queue = await channel.assertQueue("AuthQueue");
  await channel.bindQueue(queue.queue, "logExchange", "auth");

  await channel.consume(queue.queue, (msg) => {
    const data = JSON.parse(msg.content);
    console.log(data);
    channel.ack(msg);
  });
};

//consumeMessage();
