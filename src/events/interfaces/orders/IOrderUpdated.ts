import { Subjects } from "../../enums/subjects";

export interface IOrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    userId: string;
    status: string;
    expiresAt: Date;
    // ticket: TicketDoc;
  };
}
