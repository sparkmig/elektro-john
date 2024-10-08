import { Sale } from "../../types/product";
import Card from "../common/Card";

type Props = {
  sale: Sale;
};

const SalesItem = ({ sale }: Props) => {
  return (
    <li>
      <Card>
        <strong>{sale.customer}</strong>
        <p>Dato: {new Date(sale.date).toDateString()}</p>
        {/* <p>Produkter: {sale.products?.map((x) => x.name).join(", ")}</p> */}
        <p>Omsætning: {sale.sum}</p>
      </Card>
    </li>
  );
};

export default SalesItem;
