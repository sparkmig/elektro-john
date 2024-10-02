import { action, createContextStore } from "easy-peasy";
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
  checkout: action((state, name) => {
    //TODO: checkout flow

    state.items = [];
  }),
});
