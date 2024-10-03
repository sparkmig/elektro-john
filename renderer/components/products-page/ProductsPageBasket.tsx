import ProductsPageBasketCheckout from "./ProductsPageBasketCheckout";
import ProductsPageBasketItemList from "./ProductsPageBasketItemList";
import ProductsPageBasketSum from "./ProductsPageBasketSum";

const ProductsPageBasket = () => {
  return (
    <div>
      <ProductsPageBasketItemList></ProductsPageBasketItemList>
      <ProductsPageBasketSum></ProductsPageBasketSum>
      <ProductsPageBasketCheckout></ProductsPageBasketCheckout>
    </div>
  );
};

export default ProductsPageBasket;
