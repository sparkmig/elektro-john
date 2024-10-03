import { BasketStore } from "../../stores/basket-store";
import Card from "../common/Card";
import ProductsPageBasketItem from "./ProductsPageBasketItem";

const ProductsPageBasketItemList = () => {
  const basketItems = BasketStore.useStoreState((x) => x.items);

  return (
    <div>
      {basketItems.map((basketItem) => {
        return (
          <ProductsPageBasketItem
            key={basketItem.id}
            basketItem={basketItem}
          ></ProductsPageBasketItem>
        );
      })}
    </div>
  );
};

export default ProductsPageBasketItemList;
