"use client";

import Layout from "../components/Layout";
import Product from "../components/Product";
import { BasketStore } from "../stores/basket-store";
import { StoreItem } from "../types/basket-store";
import { useState } from "react";

const ProductsPage = () => {
  const basketItems = BasketStore.useStoreState((state) => state.items);
  const { addItem, mulitplyItem, deductItem, checkout } =
    BasketStore.useStoreActions((actions) => actions);
  const [customerName, setCustomerName] = useState<string>("");
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
      <Layout title="Salgside">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold">Produkter</h3>
            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
              {products.map((product) => (
                <Product product={product}></Product>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {basketItems.map((item) => {
                return (
                  <li className="p-2 flex flex-col border-b-2">
                    <p>
                      <strong>{item.name}</strong> ({item.amount}stk.)
                    </p>
                    <p>Pris (stk.) {item.price}kr.</p>
                    <div className="flex items-center">
                      <button
                        className="py-2 px-3 border-[1px] bg-gray-100 rounded-l-md"
                        onClick={() => {
                          deductItem(item.id);
                        }}
                      >
                        -
                      </button>
                      <div className="border-t-[1px] w-10 border-b-[1px] p-2 text-center">
                        {item.amount}
                      </div>
                      <button
                        className="py-2 px-3 aspect-square border-[1px] bg-gray-100 rounded-r-md"
                        onClick={() => {
                          mulitplyItem(item.id);
                        }}
                      >
                        +
                      </button>
                      <div className="p-2">{item.price * item.amount}kr.</div>
                    </div>
                  </li>
                );
              })}
              <li className="p-2">
                Sum: {basketItems.reduce((a, b) => a + b.price * b.amount, 0)}
                kr.
              </li>
            </ul>
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductsPage;
