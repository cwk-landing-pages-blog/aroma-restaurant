import { getImgUrl } from '@/utils/getImgUrl';
import Image from 'next/image';
import React from 'react';
import menuItemPng from '@/assets/icons/menu-item.png';

const MenuItem = ({ img, name, price, description, hasDivider = true }) => {
  const imgSrc = img?.url ? img.url: menuItemPng;

  return (
    <div className='relative z-20 pb-4 w-full'>
      <Image
        src={imgSrc}
        className='rounded-3xl absolute h-28 top-6  md:left-0 md:top-1 object-cover'
        width={125}
        height={125}
        alt={name}
      />

      <div className='pl-36 py-4 h-[165px] sm:h-[125px]'>
        <div className='relative z-20 flex gap-1 md:gap-0 justify-start md:justify-between items-start flex-col md:flex-row'>
          <h1 className='capitalize bg-zinc-900 relative z-20 pr-4 font-bold text-white text-lg md:text-xl'>{name}</h1>
            
          {hasDivider ? (
            <div className='hidden md:flex absolute top-3 z-0 border-y  h-2 border-gray-400 w-full' />
          ) : null}
          
          {price}
        </div>

        {description ? <p className='text-sm md:text-base my-2 md:m-0 text-gold-400 opacity-90'>{description}</p>: null}
      </div>
    </div>
  );
};

export default MenuItem;
