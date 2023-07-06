export interface Dialogue {
  id: number;
  name: string;
  usersIds: number[];
  messagesIds: number[];
  createdAt: string;
}

export interface Message {
  id: number;
  text: string;
  senderId: number;
  dialogueId: number;
  createdAt: string;
}
