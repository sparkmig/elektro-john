import { SalesStore } from "../../stores/sales-store";
import InputWithLabel from "../common/InputWithLabel";

const SalesPageToDateFilter = () => {
  const updateFilter = SalesStore.useStoreActions((x) => x.updateFilter);
  const filter = SalesStore.useStoreState((x) => x.filter);
  return (
    <InputWithLabel
      label="Test"
      type="date"
      value={filter.to?.toISOString().substring(0, 10)}
      onChange={(event) => {
        let to = null;
        if (event.currentTarget.value) to = new Date(event.currentTarget.value);
        updateFilter({
          to,
        });
      }}
    ></InputWithLabel>
  );
};

export default SalesPageToDateFilter;
