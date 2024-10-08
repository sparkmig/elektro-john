import { action, createContextStore, thunk, thunkOn } from "easy-peasy";
import { SalesStore as SalesStoreType } from "../types/sales-store";
import { convertObjectToUrlParams } from "../utils/api-utils";

export const SalesStore = createContextStore<SalesStoreType>({
  filter: {},
  sales: [],
  setSales: action((state, sales) => {
    state.sales = sales;
  }),
  refresh: thunk(async (state, payload, { getState }) => {
    const filter = getState().filter;

    const params = convertObjectToUrlParams(filter);
    const url = "http://localhost:5033/sales?" + params;

    const response = await fetch(url);
    if (response.ok) state.setSales(await response.json());
    throw "response not ok";
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
