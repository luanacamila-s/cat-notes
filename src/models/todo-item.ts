export type TodoItem = {
  id: number;
  description: string;
  done: boolean
  createdAt: Date;
  updatedAt: Date | null;
  color: string;
}
