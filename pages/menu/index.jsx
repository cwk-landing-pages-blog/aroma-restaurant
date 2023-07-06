import Layout from '@/components/Layout';
import RestaurantMenu from '@/components/home/RestaurantMenu';
import { getMenuPageData } from '@/utils/api';
import Head from 'next/head';
import React from 'react';

const Menu = ({data}) => {
  console.log("🚀 ~ file: index.jsx:7 ~ Menu ~ data:", data)

  const {
    description,
    menu_items,
    menu_title,
  } = data?.data?.attributes;

  const metadata = {
    title: 'Menu - Aroma Restaurant',
    description:description ? description : 'Our delicious menu',
    image: '',
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <title>Menu - Aroma Restaurant</title>
      </Head>

      <section className='mt-20'>
      <RestaurantMenu title={menu_title} items={menu_items} />
      </section>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const result = await getMenuPageData();

  if (result?.data !== undefined && result !== undefined) {
    return {
      props: {
        isError: false,
        data: result.data,
      },
    };
  }

  return {
    props: {
      data: null,
      isError: true,
    },
  };
}

export default Menu;
