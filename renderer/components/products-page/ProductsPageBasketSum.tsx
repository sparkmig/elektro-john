import { BasketStore } from "../../stores/basket-store";

const ProductsPageBasketSum = () => {
  const basketItems = BasketStore.useStoreState((state) => state.items);

  return (
    <div className="p-2">
      Sum: {basketItems.reduce((a, b) => a + b.price * b.amount, 0)}
      kr.
    </div>
  );
};

export default ProductsPageBasketSum;
