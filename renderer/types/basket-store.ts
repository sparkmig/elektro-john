import { Action, Thunk } from "easy-peasy";

export type StoreItem = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

export type BasketStore = {
  items: StoreItem[];
  addItem: Action<BasketStore, StoreItem>;
  removeItem: Action<BasketStore, number>;
  mulitplyItem: Action<BasketStore, number>;
  deductItem: Action<BasketStore, number>;
  checkout: Action<BasketStore, string>;
};
