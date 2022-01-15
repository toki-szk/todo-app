import Head from 'next/head';
import React, { ReactNode } from 'react';

import Header from '@/components/common/Header';

type PROPS = {
  title?: string;
  children: ReactNode;
};

const Layout: React.VFC<PROPS> = ({ children, title = 'todo-list' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="text-[#0f1419]">
        <main className="relative">{children}</main>
      </div>
    </>
  );
};

export default Layout;
