import AmountEarnedInPeriod from "./AmountEarnedInPeriod";
import SalesAmount from "./SalesAmount";
import SalesPageSalesAverageByCustomer from "./SalesPageSalesAverageByCustomer";

const SalesPageDataGrid = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Salg</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <AmountEarnedInPeriod></AmountEarnedInPeriod>
        <SalesAmount></SalesAmount>
        <SalesPageSalesAverageByCustomer></SalesPageSalesAverageByCustomer>
      </div>
    </div>
  );
};

export default SalesPageDataGrid;
