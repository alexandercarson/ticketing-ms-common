import { Subjects } from "../enums/subjects";

export interface IEventListener {
  subject: Subjects;
  data: any;
}
