import { BasketStore } from "../stores/basket-store";
import { StoreItem } from "../types/basket-store";
import { Product as ProductType } from "../types/product";
import Card from "./common/Card";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const addItem = BasketStore.useStoreActions((actions) => actions.addItem);
  return (
    <Card shadowOnHover={true}>
      <strong>{product.name}</strong>
      <p>Pris: {product.price}kr.</p>
      <button
        className="bg-gray-200 p-2 rounded-md"
        onClick={() => {
          addItem({
            ...product,
            amount: 1,
          } as StoreItem);
        }}
      >
        Læg i kurv
      </button>
    </Card>
  );
};

export default Product;
