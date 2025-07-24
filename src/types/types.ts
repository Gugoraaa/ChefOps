export type Product = {
  name: string;
  amount: number;
};

export type Order = {
  orderId: number;
  products: Product[];
  status: string;
  createdAt: string;
};

export enum Status {
  Queue = "queue",
  Cooking = "cooking",
  Completed = "completed",
  Canceled = "canceled",
}
