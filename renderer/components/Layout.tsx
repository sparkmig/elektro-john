import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { StoreProvider } from "easy-peasy";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex gap-2 p-2 justify-center">
        <Link className="bg-gray-200 p-2 rounded-md" href="/">
          Hjem
        </Link>
        <Link className="bg-gray-200 p-2 rounded-md" href="/sales-page">
          Omsætning
        </Link>
        <Link className="bg-gray-200 p-2 rounded-md" href="/products-page">
          Produkter
        </Link>
      </nav>
    </header>
    <div className="p-4">{children}</div>
    <footer>
      <hr />
    </footer>
  </div>
);

export default Layout;
