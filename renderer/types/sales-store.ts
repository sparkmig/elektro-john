import { Action, ThunkOn } from "easy-peasy";
import { Product, Sale } from "./product";

export type SalesStore = {
  sales: Sale[];
  filter: SalesFilter;
  onFilterChange: ThunkOn<SalesStore>;
  refresh: Action<SalesStore>;
  updateFilter: Action<SalesStore, SalesFilter>;
};

export type SalesFilter = {
  from?: Date;
  to?: Date;
};
