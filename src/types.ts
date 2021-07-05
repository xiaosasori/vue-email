export interface Email {
  id: string;
  from: string;
  to: string[];
  subject: string;
  date: string;
  body: string;
  hasAttachment: boolean;
}
