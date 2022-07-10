import { Subjects } from "../../enums/subjects";

export interface IOrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    userId: string;
    status: string;
    expiresAt: Date;
    // ticket: TicketDoc;
  };
}
