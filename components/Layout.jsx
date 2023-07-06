import React from 'react';
import Metadata from './Metadata';
import Head from 'next/head';
import Navbar from './navbar';

const Layout = ({ metadata, children }) => {
  return (
    <main>
      <Metadata {...metadata} />
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='overflow-x-hidden'>
      <Navbar title={'Aroma Restaurant'} />

      {children}
      </div>
    </main>
  );
};

export default Layout;
