import { SalesStore } from "../../stores/sales-store";
import Card from "../common/Card";

const AmountEarnedInPeriod = () => {
  const sales = SalesStore.useStoreState((x) => x.sales);

  return (
    <Card shadow="shadow-md">
      <strong>Omsætning i alt:</strong>
      <p className="text-lg">{sales.reduce((a, b) => a + b.sum, 0)} kr.</p>
    </Card>
  );
};

export default AmountEarnedInPeriod;
