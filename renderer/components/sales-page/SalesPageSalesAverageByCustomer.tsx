import { useMemo } from "react";
import { SalesStore } from "../../stores/sales-store";
import Card from "../common/Card";

const SalesPageSalesAverageByCustomer = () => {
  const sales = SalesStore.useStoreState((state) => state.sales);
  const averageByCustomer = useMemo(() => {
    const customersObj = Object.groupBy(sales, (sale) => sale.customer);
    const total = sales.reduce((a, b) => a + b.sum, 0);
    return (total / Object.keys(customersObj).length).toFixed(2);
  }, [sales]);
  return (
    <Card shadow="shadow-md">
      <strong>Gennemsnit pr. kunde:</strong>
      <p className="text-lg">{averageByCustomer} kr.</p>
    </Card>
  );
};

export default SalesPageSalesAverageByCustomer;
