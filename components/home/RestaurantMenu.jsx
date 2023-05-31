import { homeCategory } from '@/utils/constants';
import React from 'react';
import BgFull from '../ui/backgrounds/BgFull';
import TitleSection from '../ui/TitleSection';
import Romb from '../ui/Romb/Romb';

const RestaurantMenu = ({ title, items }) => {
  console.log({ title, items });
  return (
    <div id='menu' className='bg-zinc-900 relative z-0 w-full text-white h-96 py-16'>
      {/* title */}
      <TitleSection
        title={title.title}
        hasDivider={title.hasDivider}
        subtitle={title.subtitle}
        className='z-0'
      />

      {/* categories */}
      <section className='border-y border-gray-600 mx-36 my-4 py-2 flex gap-4 justify-around items-center'>
        {homeCategory.map((cat) => (
          <Romb key={cat.key} >
            <span className='text-gold-400 pl-1 uppercase'>{cat.name}</span>
          </Romb>
        ))}
      </section>
      {/* menu */}

      <BgFull />
    </div>
  );
};

export default RestaurantMenu;
