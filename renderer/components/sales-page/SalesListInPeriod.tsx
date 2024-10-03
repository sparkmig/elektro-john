import { SalesStore } from "../../stores/sales-store";
import SalesItem from "./SalesItem";

const SalesListInPeriod = () => {
  const sales = SalesStore.useStoreState((x) => x.sales);

  return (
    <div>
      <h3 className="">Køb:</h3>
      <ul className="grid gap-2">
        {sales.map((sale) => (
          <SalesItem sale={sale}></SalesItem>
        ))}
      </ul>
    </div>
  );
};

export default SalesListInPeriod;
