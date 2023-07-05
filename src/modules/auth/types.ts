export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  dialoguesIds: number[];
  createdAt: string;
}
