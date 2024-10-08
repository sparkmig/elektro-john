import { action, createContextStore, thunk } from "easy-peasy";
import { BasketStore as BasketStoreType } from "../types/basket-store";

export const BasketStore = createContextStore<BasketStoreType>({
  items: [],
  addItem: action((state, item) => {
    const existing = state.items.find((x) => x.id == item.id);
    if (existing) {
      existing.amount++;
    } else {
      state.items.push(item);
    }
  }),
  deductItem: action((state, id) => {
    var item = state.items.find((x) => x.id === id);
    item.amount--;
    if (item.amount == 0) {
      state.items = state.items.filter((x) => x.id !== id);
    }
  }),
  mulitplyItem: action((state, id) => {
    var item = state.items.find((x) => x.id === id);
    item.amount++;
  }),
  removeItem: action((state, id) => {
    state.items = state.items.filter((x) => x.id !== id);
  }),
  checkout: thunk(async (actions, customer, { getState }) => {
    const { items } = getState();

    const body = {
      sum: items.reduce((a, b) => a + b.amount * b.price, 0),
      customer: customer,
    };
    const respone = await fetch("http://localhost:5033/sales", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (respone.ok) actions.clearBasket();
    else throw "response not ok";
  }),
  clearBasket: action((state) => {
    state.items = [];
  }),
});
