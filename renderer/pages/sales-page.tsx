import { useEffect } from "react";
import Layout from "../components/Layout";
import { SalesStore } from "../stores/sales-store";
import Card from "../components/common/Card";
import SalesPageDataGrid from "../components/sales-page/SalesPageDataGrid";
import SalesListInPeriod from "../components/sales-page/SalesListInPeriod";
import InputWithLabel from "../components/common/InputWithLabel";
import SalesPageFilter from "../components/sales-page/SalesPageFilter";

const SalesPage = () => {
  const refresh = SalesStore.useStoreActions((action) => action.refresh);
  useEffect(() => {
    refresh();
  }, []);

  return (
    <Layout>
      <div className="grid gap-4">
        <SalesPageFilter></SalesPageFilter>
        <SalesPageDataGrid></SalesPageDataGrid>
        <SalesListInPeriod></SalesListInPeriod>
      </div>
    </Layout>
  );
};

export default SalesPage;
