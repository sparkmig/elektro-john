import { Action, ThunkOn, Thunk } from "easy-peasy";
import { Product, Sale } from "./product";

export type SalesStore = {
  sales: Sale[];
  filter: SalesFilter;
  onFilterChange: ThunkOn<SalesStore>;
  refresh: Thunk<SalesStore>;
  setSales: Action<SalesStore, Sale[]>;
  updateFilter: Action<SalesStore, SalesFilter>;
};

export type SalesFilter = {
  from?: Date;
  to?: Date;
};
