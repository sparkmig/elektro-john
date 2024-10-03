import AmountEarnedInPeriod from "./AmountEarnedInPeriod";
import SalesAmount from "./SalesAmount";

const SalesPageDataGrid = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Salg</h3>
      <div className="grid grid-cols-4 gap-4">
        <AmountEarnedInPeriod></AmountEarnedInPeriod>
        <SalesAmount></SalesAmount>
      </div>
    </div>
  );
};

export default SalesPageDataGrid;
