import { action, createContextStore, thunkOn } from "easy-peasy";
import { SalesStore as SalesStoreType } from "../types/sales-store";
import { Sale } from "../types/product";

export const SalesStore = createContextStore<SalesStoreType>({
  filter: {},
  sales: [],
  refresh: action((state) => {
    let items: Sale[] = [
      {
        customer: "Erik Hansen",
        products: [],
        sum: 888,
        date: new Date("2024-12-12"),
      },
      {
        customer: "Hans Hansen",
        products: [],
        sum: 888,
        date: new Date("2024-12-13"),
      },
      {
        customer: "John Dhoe",
        products: [],
        sum: 888,
        date: new Date("2024-12-13"),
      },

      {
        customer: "John Dhoe",
        products: [],
        sum: 888,
        date: new Date("2024-12-14"),
      },
    ];

    if (state.filter?.from) {
      items = items.filter((x) => x.date >= state.filter.from);
    }

    if (state.filter?.to) {
      items = items.filter((x) => x.date <= state.filter.to);
    }

    state.sales = items;
  }),
  onFilterChange: thunkOn(
    (actions) => actions.updateFilter,
    async (actions) => {
      actions.refresh();
    }
  ),
  updateFilter: action((state, filter) => {
    state.filter = {
      ...state.filter,
      ...filter,
    };
  }),
});
