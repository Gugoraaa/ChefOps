export type Product = {
    name: string;
    amount: number;
    status: string
    };

export type NamedOrder = {
  orderName: string;
  products: Product[];
};