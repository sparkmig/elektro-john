import { useState } from "react";
import { BasketStore } from "../../stores/basket-store";

const ProductsPageBasketCheckout = () => {
  const [customerName, setCustomerName] = useState<string>("");
  const basketItems = BasketStore.useStoreState((state) => state.items);
  const checkout = BasketStore.useStoreActions((actions) => actions.checkout);

  return (
    <div className="gap-2 flex">
      <input
        type="text"
        placeholder="Kundens navn"
        className="w-full p-2 border-gray-100 border-[1px] rounded-md"
        onChange={(event) => {
          setCustomerName(event.currentTarget.value ?? "");
        }}
        value={customerName}
      ></input>
      <button
        className="p-2 bg-green-300 rounded-md w-full disabled:bg-gray-400"
        disabled={basketItems.length == 0 || customerName.length == 0}
        onClick={() => {
          checkout(customerName);
          setCustomerName("");
        }}
      >
        Køb
      </button>
    </div>
  );
};

export default ProductsPageBasketCheckout;
