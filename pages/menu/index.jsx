import Layout from '@/components/Layout';
import TitleSection from '@/components/ui/TitleSection';
import { getMenuPageData } from '@/utils/api';
import Head from 'next/head';
import React from 'react';
import {  menuCategory } from '@/utils/constants';
import MenuItem from '@/components/ui/MenuItem';

const Menu = ({ data }) => {
  const { description, menu_items } = data?.data?.attributes;

  const metadata = {
    title: 'Menu - Aroma Restaurant',
    description: description ? description : 'Our delicious menu',
    image: '',
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <title>Menu - Aroma Restaurant</title>
      </Head>

      <section className='mt-4 sm:mt-24'>
        <TitleSection
          title={'Explore our menu'}
          hasDivider
          subtitle={'Carefully cooked dishes'}
          className='z-0 py-8 bg-zinc-900'
        />

        {/* TODO add e new separator */}

        <section className=''>
          {menuCategory.map((category) => {
            return (
              <div id={category.key} key={category.key} className='flex flex-col bg-zinc-900 '>
                <h2 className='mx-auto py-5 px-4 underline md:px-16 text-xl sm:text-2xl text-gold-400 uppercase font-bold tracking-wider'>{category.name}</h2>

                <div className='mx-auto z-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10  max-w-[600] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1600px] py-5 px-4 md:px-16 mb-8 border-b-double border-b-2 border-gold-400 '>
                  {menu_items?.filter(el=>el.category == category.key).map((item) => {
                    const price = (
                      <div className='w-24 bg-zinc-900 z-10 pl-0 md:pl-4 text-xl text-gold-400'>
                        £{Number(item.price.amount).toFixed(2)}
                      </div>
                    );
                    return (
                      <MenuItem
                        key={item.id}
                        name={item.name}
                        img={item?.img?.data?.attributes}
                        price={price}
                        description={item.description}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
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
