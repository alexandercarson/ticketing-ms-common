import { Subjects } from "../enums/subjects";

export interface IEventPublisher {
  subject: Subjects;
  data: any;
}
