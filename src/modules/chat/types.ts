import type { User } from 'modules/auth';

export interface Dialogue {
  id: number;
  name: string;
  users: User[];
  messages: Message[];
  createdAt: string;
}

export interface Message {
  id: number;
  text: string;
  senderId: number;
  dialogueId: number;
  createdAt: string;
}
