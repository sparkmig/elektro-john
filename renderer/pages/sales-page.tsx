import { useEffect } from "react";
import Layout from "../components/Layout";
import { SalesStore } from "../stores/sales-store";

const SalesPage = () => {
  const { refresh, updateFilter } = SalesStore.useStoreActions(
    (action) => action
  );
  const { filter, sales } = SalesStore.useStoreState((state) => state);
  useEffect(() => {
    refresh();
  }, []);

  return (
    <Layout>
      <div className="grid gap-4">
        <div className="">
          <h3 className="text-xl font-bold">Filter:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Fra:</label>
              <input
                type="date"
                className="p-2 border-[1px] border-gray-200 rounded-md"
                onChange={(event) => {
                  let from = null;
                  if (event.currentTarget.value)
                    from = new Date(event.currentTarget.value);
                  updateFilter({
                    from,
                  });
                }}
                value={filter.from?.toISOString().substring(0, 10)}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Til:</label>
              <input
                type="date"
                className="p-2 border-[1px] border-gray-200 rounded-md"
                value={filter.to?.toISOString().substring(0, 10)}
                onChange={(event) => {
                  let to = null;
                  if (event.currentTarget.value)
                    to = new Date(event.currentTarget.value);
                  updateFilter({
                    to,
                  });
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Salg</h3>
          <ul className="grid grid-cols-4 gap-4">
            <li className="p-2 border-[1px] border-gray-200 rounded-md flex flex-col shadow-md">
              <strong>Omsætning i alt:</strong>
              <p className="text-lg">
                {sales.reduce((a, b) => a + b.sum, 0)} kr.
              </p>
            </li>
            <li className="p-2 border-[1px] border-gray-200 rounded-md flex flex-col shadow-md">
              <strong>Antal køb:</strong>
              <p className="text-lg">{sales.length} stk.</p>
            </li>
          </ul>
          <ul className="grid gap-2">
            {sales.map((item) => {
              return (
                <li className="p-2 border-[1px] border-gray-200 rounded-md">
                  <strong>{item.customer}</strong>
                  <p>Dato: {item.date.toDateString()}</p>
                  <p>
                    Produkter: {item.products.map((x) => x.name).join(", ")}
                  </p>
                  <p>Omsætning: {item.sum}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SalesPage;
