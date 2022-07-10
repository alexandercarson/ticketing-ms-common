import { Subjects } from "../../enums/subjects";

export interface ITicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    userId: string;
    title: string;
    price: number;
  };
}
