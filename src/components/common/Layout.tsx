import Head from 'next/head';
import React, { ReactNode } from 'react';
type PROPS = {
  title?: string;
  children: ReactNode;
}

const Layout: React.VFC<PROPS> = ({children, title = 'todo-list'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-wrap min-h-screen text-[#0f1419]'>
        <main className='overflow-hidden relative flex-1'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
