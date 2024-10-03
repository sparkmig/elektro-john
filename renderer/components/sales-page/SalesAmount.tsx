import { SalesStore } from "../../stores/sales-store";
import Card from "../common/Card";

const SalesAmount = () => {
  const sales = SalesStore.useStoreState((x) => x.sales);
  return (
    <Card shadow="shadow-md">
      <strong>Antal køb:</strong>
      <p className="text-lg">{sales.length} stk.</p>
    </Card>
  );
};

export default SalesAmount;
