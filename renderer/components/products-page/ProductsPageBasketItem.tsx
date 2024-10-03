import { BasketStore } from "../../stores/basket-store";
import { StoreItem } from "../../types/basket-store";
import AddOrDeduct from "../common/AddOrDeduct";
import Card from "../common/Card";

type Props = {
  basketItem: StoreItem;
};

const ProductsPageBasketItem = ({ basketItem }: Props) => {
  const { deductItem, mulitplyItem } = BasketStore.useStoreActions(
    (actions) => actions
  );
  const onAdd = () => {
    mulitplyItem(basketItem.id);
  };
  const onDeduct = () => {
    deductItem(basketItem.id);
  };
  return (
    <div className="border-b-[1px] p-4 grid gap-1">
      <strong>{basketItem.name}</strong>
      <p>Pris (stk.) {basketItem.price}kr.</p>
      <AddOrDeduct onAdd={onAdd} onDeduct={onDeduct} value={basketItem.amount}>
        {basketItem.amount * basketItem.price} kr.
      </AddOrDeduct>
    </div>
  );
};

export default ProductsPageBasketItem;
