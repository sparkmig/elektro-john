import { SalesStore } from "../../stores/sales-store";
import InputWithLabel from "../common/InputWithLabel";

const SalesPageFromDateFilter = () => {
  const updateFilter = SalesStore.useStoreActions((x) => x.updateFilter);
  const filter = SalesStore.useStoreState((x) => x.filter);

  return (
    <InputWithLabel
      label="Fra:"
      type="date"
      onChange={(event) => {
        let from = null;
        if (event.currentTarget.value)
          from = new Date(event.currentTarget.value);
        updateFilter({
          from,
        });
      }}
      value={filter.from?.toISOString().substring(0, 10)}
    ></InputWithLabel>
  );
};

export default SalesPageFromDateFilter;
