import { useEffect, useState } from "react";
import Product from "../Product";
import { Product as ProductType } from "../../types/product";

const ProductsPageProductList = () => {
  const [products, setProducts] = useState<ProductType[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5033/products");
      if (response.ok) setProducts(await response.json());
      else throw "response is not ok";
    })();
  });
  return (
    <div>
      <h3>Produkter</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {products?.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductsPageProductList;
