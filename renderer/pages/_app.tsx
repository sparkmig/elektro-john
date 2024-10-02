import { BasketStore } from "../stores/basket-store";
import "../styles/global.css";
import { SalesStore } from "../stores/sales-store";

export default function WrappedApp({ Component, pageProps }) {
  return (
    <BasketStore.Provider>
      <SalesStore.Provider>
        <Component {...pageProps}></Component>
      </SalesStore.Provider>
    </BasketStore.Provider>
  );
}
