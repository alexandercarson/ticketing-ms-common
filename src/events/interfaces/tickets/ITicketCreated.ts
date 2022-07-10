import { Subjects } from "../../enums/subjects";

export interface ITicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    userId: string;
    title: string;
    price: number;
  };
}
