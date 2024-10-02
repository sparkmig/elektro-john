export type Product = {
  name: string;
  id: number;
  price: number;
};

export type Sale = {
  sum: number;
  products: Product[];
  customer: string;
  date: Date;
};
