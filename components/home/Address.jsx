import React from 'react';
import TitleSection from '../ui/TitleSection';
import BgLeaves from '../ui/backgrounds/BgLeaves';
import BgTomato from '../ui/backgrounds/BgTomato';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';
import { headerContacts } from '@/utils/constants';

const Address = ({ address, contact }) => {
  return (
    <div
      id='find-us'
      className='bg-black z-10 relative w-full h-full flex flex-col justify-center items-center p-16'
    >
      <TitleSection title='Find Us' hasDivider>
        <Link
          target='_blank'
          href={headerContacts.googleMapLocation}
          className='flex justify-center gap-2 items-center text-gray-400 text-base hover:cursor-pointer w-full'
        >
          <MdLocationPin className='text-red-800 text-4xl leading-6' />
          <h2 className='border-b border-transparent hover:border-b  text-white font-semibold hover:border-gold-400 text-xl w-64 md:w-full md:text-2xl'>
            {headerContacts.address}
          </h2>
        </Link>
      </TitleSection>

      {/* google map */}
      <div
        className='my-8 border shadow-gold-400 shadow-lg border-white rounded-md overflow-hidden max-w-sm sm:max-w-full'
        dangerouslySetInnerHTML={{ __html: address.iframe_string }}
      />
      {/* social networks */}
      <div></div>

      <BgLeaves />
      <BgTomato />
    </div>
  );
};

export default Address;
