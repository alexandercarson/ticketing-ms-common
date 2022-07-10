import { Stan } from "node-nats-streaming";
import { IEventPublisher } from "./interfaces/IEventPublisher";

export abstract class Publisher<T extends IEventPublisher> {
  abstract subject: T["subject"];
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T["data"]) {
    return new Promise<void>((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          reject(err);
        }
        console.log("Event Published to subject", this.subject);
        resolve();
      });
    });
  }
}
