import SalesPageFromDateFilter from "./SalesPageFromDateFilter";
import SalesPageToDateFilter from "./SalesPageToDateFilter";

const SalesPageFilter = () => {
  return (
    <div>
      <h3>Filter:</h3>
      <div className="grid grid-cols-2 gap-4">
        <SalesPageFromDateFilter></SalesPageFromDateFilter>
        <SalesPageToDateFilter></SalesPageToDateFilter>
      </div>
    </div>
  );
};

export default SalesPageFilter;
