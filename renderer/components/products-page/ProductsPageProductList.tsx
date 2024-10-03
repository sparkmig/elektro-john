import Product from "../Product";

const ProductsPageProductList = () => {
  const products = [
    {
      name: "iPhone",
      price: 9999,
      id: 1,
    },
    {
      name: "iPad",
      price: 4999,
      id: 2,
    },
    {
      name: "Oplader",
      price: 149,
      id: 3,
    },
  ];
  return (
    <div>
      <h3>Produkter</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductsPageProductList;
