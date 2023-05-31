import { getImgUrl } from '@/utils/getImgUrl';
import React from 'react';
import TitleSection from '../ui/TitleSection';
import Image from 'next/image';
import Link from 'next/link';
import { headerContacts } from '@/utils/constants';
import call from '@/assets/icons/call.png';
import BgGarlic from '../ui/backgrounds/BgGarlic';

const alt = 'Aroma restaurant story';

const OurStory = ({ img, title }) => {
  const imgUrl = getImgUrl(img.url);

  return (
    <div id='about' className='bg-zinc-900 gap-8 w-full mx-auto py-8 relative z-0 flex flex-col items-center justify-center md:flex-row'>
      <div className='flex flex-col items-center justify-start gap-8'>
        <TitleSection
          title={title.title}
          hasDivider={title.hasDivider}
          subtitle={title.subtitle}
          className='z-0'
        >
          <p className='text-orange-100 px-8 text-center leading-snug tracking-normal max-w-lg md:max-w-3xl font-semibold text-base md:text-xl lg:text-2xl break-before-right '>
            {title.description}
          </p>
        </TitleSection>

        <Link href={`tel:${headerContacts.tel}`}>
          <h3 className='text-white text-2xl text-center pb-2'>
            Book Through Call
          </h3>
          <p className='text-gold-400 text-xl text-center flex gap-3 tracking-wider'>
            <Image
              className='animate-pulse'
              src={call}
              width={32}
              height={32}
              alt={`call restaurant to book, tel ${headerContacts.tel}`}
            />{' '}
            {headerContacts.tel}
          </p>
        </Link>

        {/* <Link
          className='px-4  py-3 border border-gold-400 text-gold-400 rounded-md text-xl hover:bg-zinc-600 hover:font-bold'
          href='/about'
        >
          Read More
        </Link> */}
      </div>
      <div className='relative'>
        <Image
          src={imgUrl}
          className='sm:w-96 md:w-full '
          width={700}
          height={605}
          alt={alt}
        />
      </div>
      <BgGarlic />
    </div>
  );
};

export default OurStory;
