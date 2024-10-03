import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // listen to the 'message' channel
    window.electron.receiveHello(handleMessage);

    return () => {
      window.electron.stopReceivingHello(handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    window.electron.sayHello();
  };

  return (
    <Layout title="Hjem">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Velkommen</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
