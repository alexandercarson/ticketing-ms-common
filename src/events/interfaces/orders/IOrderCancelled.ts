import { OrderStatus } from "../../enums/order-status";
import { Subjects } from "../../enums/subjects";

export interface IOrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    orderId: string;
    status: OrderStatus;
    ticket: {
      ticketId: string;
      price: number;
    };
    userId: string;
    expiresAt: string;
  };
}
