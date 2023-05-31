import { homeCategory } from '@/utils/constants';
import React, { useMemo, useState } from 'react';
import BgFull from '../ui/backgrounds/BgFull';
import TitleSection from '../ui/TitleSection';
import Romb from '../ui/Romb/Romb';
import MenuItem from '../ui/MenuItem';

const RestaurantMenu = ({ title, items }) => {
  const [active, setActive] = useState('starters');

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => item.showOnCard === true)
      .filter((item) => {
        if (active === 'dine-in') {
          return (
            item.category !== 'starters' &&
            item.category !== 'pizza' &&
            item.category !== 'pasta'
          );
        } else {
          return item.category === active;
        }
      });
  }, [active, items]);

  return (
    <div
      id='menu'
      className='bg-zinc-900 relative z-0  w-full h-full  text-white py-16'
    >
      {/* title */}
      <TitleSection
        title={title.title}
        hasDivider={title.hasDivider}
        subtitle={title.subtitle}
        className='z-0'
      />

      {/* categories */}
      <section className='border-y border-gray-600 mx-auto my-4 py-4 sm:py-2 flex flex-col sm:flex-row gap-4 max-w-[600] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1600px] justify-around items-center'>
        {homeCategory.map((cat) => {
          return (
            <div
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`hover:cursor-pointer border-b-2 border-transparent hover:border-b-gold-400 ${
                active === cat.key ? 'border-b-gold-400' : null
              }`}
            >
              <Romb>
                <span className='text-gold-400 pl-1 uppercase'>{cat.name}</span>
              </Romb>
            </div>
          );
        })}
      </section>

      {/* menu */}
      <section className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10  max-w-[600] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1600px] py-5 px-4 md:px-16'>
        {filteredItems.map((item) => {
          const price = <div className='w-24 bg-zinc-900 z-10 pl-0 md:pl-4 text-xl text-gold-400'>£{Number(item.price.amount).toFixed(2)}</div> 
          return (
            <MenuItem
              key={item.id}
              name={item.name}
              img={item?.card_img?.data?.attributes}
              price={price}
              description={item.description}
            />
          );
        })}
      </section>
      <BgFull />
    </div>
  );
};

export default RestaurantMenu;
