import { getLinksPageData } from '@/utils/api';
import Head from 'next/head';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdOutlineMenuBook, MdSettingsBackupRestore } from 'react-icons/md';
import avatarUrl from '@/assets/imgs/avatar.jpg';
import Image from 'next/image';
import BgFull from '@/components/ui/backgrounds/BgFull';
import BgLeaves from '@/components/ui/backgrounds/BgLeaves';
import BgBiber from '@/components/ui/backgrounds/BgBiber';
import { headerContacts } from '@/utils/constants';
import Link from 'next/link';
import { getIcon } from '@/utils/getIcon';
import TitleSection from '@/components/ui/TitleSection';

const MyLinkTreeItem = ({ icon, text, extra, link, target = '_blank' }) => {
  return (
    <div className='z-50 relative hover:scale-105 hover:cursor-pointer shadow-lg hover:shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500 bg-purple-700 text-wite flex items-center text-center w-full gap-3 sm:w-[600px] h-[48px]  rounded-3xl'>
      <Link
        href={link}
        target={target}
        className='w-full flex flex-row justify-between items-baseline'
      >
        <div className='text-2xl absolute top-1/4 left-2 text-white'>
          {icon}
        </div>
        <p className='w-full text-white text-md sm:text-lg font-bold'>{text}</p>
        <div className='block'>{extra ? <div>extra</div> : null}</div>
      </Link>
    </div>
  );
};

const links = ({ isError, data }) => {
  if (isError) {
    return (
      <>
        <Head>
          <title>Links - Aroma Restaurant</title>
        </Head>

        <main>
          <header>Aroma Restaurant</header>
          <body></body>
        </main>
      </>
    );
  }

  const { special_section, social_networks } = data?.data?.attributes;
  console.log('🚀 ~ file: links.jsx:54 ~ links ~ menu_items:', special_section);
  return (
    <>
      <Head>
        <title>Links - Aroma Restaurant</title>
        <meta property='og:image' content={avatarUrl} />
      </Head>
      <div className='relative overflow-x-hidden z-10  h-screen flex flex-col items-center justify-start'>
        {/* header */}
        <header className='w-full p-2'>
          <nav className='flex max-w-4xl mx-auto flex-row justify-between'>
            <Link href={'/'}>
              <div className='flex gap-1 items-center'>
                <MdSettingsBackupRestore className='text-zinc-400 text-3xl' />
                <h2 className='text-gold-400 text-lg hover:underline'>
                  Back To Home
                </h2>
              </div>
            </Link>

            {/* button for share */}
            <button>asd</button>
          </nav>
        </header>

        <section className='mx-auto flex flex-col items-center gap-4 p-4'>
          {/* avatar img */}
          <Image
            src={avatarUrl}
            width={120}
            height={120}
            className='rounded-full ring-4 shadow-md shadow-cyan-400 ring-offset-1 ring-cyan-500'
            alt='aroma Restaurant building'
          />

          {/* simple description */}
          <p className='text-white  font-bold text-2xl'>
            @AromaItalianRestaurant
          </p>
          <p className='text-gold-400 font-semibold text-center'>
            Serving Traditional Italian Delights in a Welcoming Atmosphere.
          </p>
        </section>

        <section className='w-full mt-6 px-4 flex flex-col items-center justify-start gap-6'>
          <MyLinkTreeItem
            text={'Book your table now!'}
            link={`tel:${headerContacts.tel}`}
            icon={<BsFillTelephoneOutboundFill />}
          />
          <MyLinkTreeItem
            text={'View Our Delicious Menu'}
            link={`/menu`}
            icon={<MdOutlineMenuBook />}
            target='_self'
          />
          <MyLinkTreeItem
            text={headerContacts.addressShort}
            link={headerContacts.googleMapLocation}
            icon={<FaLocationArrow />}
          />

          {/* social networks */}
          {social_networks.map((social) => {
            const icon = getIcon(social.name);
            return (
              <MyLinkTreeItem
                key={social.id}
                link={social.href}
                icon={icon}
                text={social.display_name}
              />
            );
          })}

          {/* special dish of the week */}
          <div className='flex flex-col bg-black gap-6 mb-16 sm:flex-row z-50 relative my-6 ring-1 ring-gold-400 px-6 py-4 rounded-md'>
            <div className='rounded-xl ring-2 ring-cyan-500'>
              <Image
                src={special_section?.section_img?.data?.attributes?.url}
                className='rounded-xl'
                width={300}
                height={240}
                alt='this week special dish'
              />
            </div>

            <TitleSection
              hasDivider={special_section.hasDivider}
              subtitle={special_section.subtitle}
              title={special_section?.title}
            >
              <p className='text-center text-lg sm:text-xl text-white max-w-[300px] sm:max-w-lg'>{special_section.description}</p>
              <Link href={special_section.cta_link} target='_blank' className='text-gold-400 shadow-sm shadow-cyan-500 p-2 hover:underline rounded-xl hover:scale-105'>{special_section.cta_title}</Link>
            </TitleSection>
          </div>
        </section>

        <footer className='fixed bottom-0 flex justify-center p-4 z-40'>
          <div className='flex gap-1 items-center'>
            <p className='text-green-400 text-lg'>Aroma Restaurant Tree</p>
            <SiLinktree className='text-green-800' />
          </div>
        </footer>

        <BgFull />
        <BgLeaves />
        <BgBiber styles='bottom-3 right-4' />
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const result = await getLinksPageData();

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

export default links;
