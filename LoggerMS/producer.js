import ampq from "amqplib";
import { Config } from "./config/index.js";

export class Producer {
  channel;

  async createChannel() {
    const connection = await ampq.connect(Config.rabbitMQ.url);
    this.channel = await connection.createChannel();
  }

  async publishMessage(routingKey, message) {
    if (!this.channel) {
      await this.createChannel();
    }

    await this.channel.assertExchange(Config.rabbitMQ.exchangeName, "direct");
    await this.channel.publish(
      Config.rabbitMQ.exchangeName,
      routingKey,
      Buffer.from(
        JSON.stringify({
          logType: routingKey,
          message: message,
          dateTime: new Date(),
        })
      )
    );
    console.log(
      `the message ${message} is sent to exchange ${Config.rabbitMQ.exchangeName}`
    );
  }
}
