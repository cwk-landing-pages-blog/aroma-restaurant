import React from 'react';
import TitleSection from '../ui/TitleSection';
import Image from 'next/image';
import { BsBookmarkHeartFill, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import ExternalLink from '../ExternalLink';
import BgBiber from '../ui/backgrounds/BgBiber';
import { aromaSocials } from '@/utils/constants';

const SpecialDish = ({ title }) => {
  const price = title?.price
  const imgUrl = title?.section_img?.data?.attributes?.url

  return (
    <section className='flex flex-col md:flex-row w-full justify-center md:justify-evenly items-center p-2 md:p-16'>
      {/* img */}
      <div className='w-full md:w-1/2'>
        <Image
          src={imgUrl}
          className='w-full rounded-md shadow-xl shadow-gold-400'
          alt='aroma this week special dish '
          width={1000}
          height={715}
        />
      </div>
      {/* title */}
      <div className='pl-0 md:pl-16 flex relative items-center justify-center my-16'>
        <BsBookmarkHeartFill className='hidden md:flex ml-16 text-6xl text-gold-400' />
        <TitleSection
          title={title.title}
          hasDivider={title.hasDivider}
          subtitle={title.subtitle}
          className='w-full md:w-1/2 z-20'
        >
          <p className='text-orange-100 px-8 z-20 text-center leading-snug tracking-normal max-w-lg md:max-w-3xl font-semibold text-base md:text-xl lg:text-2xl break-before-right '>
            {title.description}
          </p>

          <div className='flex w-full flex-col md:flex-row items-center justify-center gap-8 my-8'>
            <ExternalLink
              href={aromaSocials.instagram}
              title='Check On Instagram'
              icon={<AiFillInstagram className='text-pink-600 bg-white rounded-full p-1 text-3xl animate-pulse z-20' />}
            />
            <ExternalLink
              href={aromaSocials.facebook}
              title='Check On Facebook'
              icon={<BsFacebook className='text-sky-700  rounded-full p-1 text-4xl animate-pulse z-20' />}
            />
          </div>
          <Link
            href='/menu'
            className='py-2 px-4 bg-zinc-800 text-gold-400 border border-gold-400 uppercase rounded-md '
          >
            View Menu
          </Link>
        </TitleSection>
        <BgBiber styles='absolute -z-10 top-0 right-0'/>
      </div>
    </section>
  );
};

export default SpecialDish;
