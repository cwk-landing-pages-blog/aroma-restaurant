import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import TitleSection from './TitleSection';
import BgLeaves from './backgrounds/BgLeaves';
import BgBiber from './backgrounds/BgBiber';
import ExternalLink from '../ExternalLink';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function Footer({ socials }) {
  const getSocial = (item) => {
    switch (item.name) {
      case 'instagram':
        return (
          <ExternalLink
            key={item.display_name}
            href={item.href}
            title={item.display_name}
            icon={
              <AiFillInstagram className='text-pink-600 bg-white rounded-full p-1 text-3xl animate-pulse z-20' />
            }
          />
        );
      case 'facebook':
        return (
          <ExternalLink
            href={item.href}
            key={item.display_name}
            title={item.display_name}
            icon={
              <BsFacebook className='text-sky-700  rounded-full p-1 text-4xl animate-pulse z-20' />
            }
          />
        );
      default:
        break;
    }
  };
  return (
    <div className='relative z-20'>
      <>
        <div className='pt-8 flex flex-col justify-center items-center gap-10'>
          <div className='lg:col-span-2'>
            <Link
              href='/'
              className='flex items-center justify-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'
            >
              <span>
                <Image
                  src='/img/restaurant/news-2.jpg'
                  alt='N'
                  width='60'
                  height='60'
                  className='rounded-3xl'
                />
              </span>
              <h1 className='text-2xl text-gold-400 uppercase'>
                Aroma Restaurant
              </h1>
            </Link>

            <TitleSection hasDivider title={'Social Networks'}>
              <div className='flex w-full flex-col md:flex-row items-center justify-center gap-8 my-8'>
                {socials?.map((social) => getSocial(social))}
              </div>
            </TitleSection>
          </div>
        </div>

        <div className='p-2 z-20 bg-black opacity-50 relative text-lg text-center text-gray-300'>
          <h6>Copyright © {new Date().getFullYear()}. Made with ♥ by</h6>
          <a
            href='https://codewithkoli.com/'
            target='_blank'
            rel='noopener'
            className='text-gold-400'
          >
            CWK ( codewithkoli )
          </a>
        </div>
      </>

      <BgBiber />
      <BgLeaves />
    </div>
  );
}
