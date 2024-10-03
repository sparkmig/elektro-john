import Layout from "../components/Layout";
import ProductsPageBasket from "../components/products-page/ProductsPageBasket";
import ProductsPageProductList from "../components/products-page/ProductsPageProductList";

const ProductsPage = () => {
  return (
    <div>
      <Layout title="Salgside">
        <div className="grid grid-cols-2 gap-4">
          <ProductsPageProductList></ProductsPageProductList>
          <ProductsPageBasket></ProductsPageBasket>
        </div>
      </Layout>
    </div>
  );
};

export default ProductsPage;
