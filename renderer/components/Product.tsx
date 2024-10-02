import { BasketStore } from "../stores/basket-store";
import { StoreItem } from "../types/basket-store";
import { Product as ProductType } from "../types/product";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const addItem = BasketStore.useStoreActions((actions) => actions.addItem);
  return (
    <li className="border-gray-200 border-[1px] rounded-md p-2 flex flex-col hover:shadow-md transition-all ease-in">
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
    </li>
  );
};

export default Product;
