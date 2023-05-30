import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Romb from './ui/Romb/Romb';
import { headerContacts } from '@/utils/constants';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { GiSunflower } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import BgLeaves from './ui/backgrounds/BgLeaves';
import BgBiber from './ui/backgrounds/BgBiber';

export default function Navbar({ title }) {
  const navigation = [
    {
      key: 'menu',
      name: 'Menu',
    },
    {
      key: 'services',
      name: 'Services',
    },
    {
      key: 'about',
      name: 'About',
    },
    {
      key: 'find-us',
      name: 'Find Us',
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, setScrolled]);

  // TODO better navbar with the new header for more quick infos and actions
  return (
    <div className={`${scrolled ? 'bg-zinc-800' : ''} w-full fixed top-0 z-20`}>
      <div
        className={
          `${scrolled ? 'bg-black w-full ' : ''} ` +
          'hidden px-0 sm:px-8  bg-black  md:bg-transparent md:flex relative flex-wrap text-white items-center justify-between py-2 mx-auto lg:justify-between xl:px-32'
        }
      >
        <div className='w-full flex justify-between gap-4'>
          <Link
            target='_blank'
            href={headerContacts.googleMapLocation}
            className='flex justify-center gap-2 items-center text-gray-400 text-base hover:cursor-pointer '
          >
            <MdLocationPin className='text-red-800 text-xl leading-6' />
            <span className='border-b border-transparent hover:border-b hover:border-gold-400'>
              {headerContacts.address}
            </span>
          </Link>

          <h4 className='flex items-center gap-2 text-md'>
            <BsClockHistory className='text-lg' />
            {headerContacts.openHours}
          </h4>

          <div>
            <Link
              className='text-sm flex justify-center gap-2 items-center tracking-tight text-gold-400'
              href={`tel:${headerContacts.tel}`}
            >
              <FaPhoneAlt /> {headerContacts.tel}
            </Link>
          </div>
        </div>
      </div>
      <nav className='w-full bg-black md:bg-transparent  container relative flex flex-wrap items-center justify-start px-8 mx-auto lg:justify-center xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='z-10 flex flex-wrap items-center justify-between w-full py-1 lg:w-auto'>
                <Link
                  href='/'
                  className='lg:hidden flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'
                >
                  <Image
                    src='/icons/restaurant.png'
                    alt='A'
                    width='32'
                    height='32'
                    className='w-8'
                  />
                  <h1 className='header_title'>{title}</h1>
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2  ml-auto text-yellow-500 rounded-md lg:hidden hover:text-yellow-700'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
                  <div className='flex flex-col w-full border-b-2 border-gold-400 border-double'>
                    {navigation.map((item) => (
                      <Link
                        key={item.key}
                        href={`/#${item.key}`}
                        className='w-full  px-4 py-2  -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700'
                      >
                        <Romb>{item.name}</Romb>
                      </Link>
                    ))}
                    <div className='mt-8 text-center'>
                      <h1 className='text-white font-semibold text-3xl mb-4'>
                        Visit Us
                      </h1>
                      <Link
                        target='_blank'
                        href={headerContacts.googleMapLocation}
                        className='flex justify-center gap-2 items-center text-gray-400 text-lg mb-4 hover:cursor-pointer '
                      >
                        <MdLocationPin className='text-red-800 text-xl leading-6' />
                        <span className='border-b border-transparent hover:border-b hover:border-gold-400'>
                          {headerContacts.address}
                        </span>
                      </Link>
                      <p className='text-gray-400 text-lg mb-4'>
                        {headerContacts.openHours}
                      </p>
                      <p className='text-gray-400 text-lg mb-4'>
                        {headerContacts.email}
                      </p>

                      <p className='flex justify-center mt-8'>
                        <span className='border-y-2 border-' />
                        <GiSunflower className='text-3xl text-gold-400' />
                        <span />
                      </p>
                      <div className='flex flex-col text-white text-lg my-8'>
                        <h2 className='text-white mb-2'>Booking Request</h2>
                        <Link
                          className='text-base flex justify-center gap-2 items-center tracking-wider text-gold-400'
                          href={`tel:${headerContacts.tel}`}
                        >
                          <FaPhoneAlt /> {headerContacts.tel}
                        </Link>
                      </div>
                    </div>
                    <BgBiber />
                    <BgLeaves />
                  </div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden bg-transparent text-center lg:flex lg:items-center sticky'>
          <ul className='items-center justify-center  list-none lg:pt-0 lg:flex'>
            {navigation.slice(0, 2).map((menu) => (
              <li className='mr-3 nav__item' key={menu.key}>
                <Link
                  href={`/#${menu.key}`}
                  className='inline-block px-4 py-1 text-xl font-normal min-w-[110px] text-gold-400 no-underline rounded-md  hover:text-yellow-700 focus:text-yellow-500 focus:underline focus:underline-offset-3'
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            <Link
              href='/'
              className='flex items-center space-x-2 text-xl font-medium text-indigo-500 dark:text-gray-100'
            >
              <Image
                src='/icons/restaurant.png'
                alt='A'
                width='24'
                height='24'
                className='w-6'
              />
              <h1 className='header_title'>{title}</h1>
            </Link>

            {navigation.slice(2, navigation.length).map((menu) => (
              <li className='mr-3 nav__item' key={menu.key}>
                <Link
                  href={`/#${menu.key}`}
                  className='inline-block px-4 py-1 text-xl font-normal min-w-[120px] text-gold-400 no-underline rounded-md  hover:text-yellow-700 focus:text-yellow-500 focus:underline focus:underline-offset-3'
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
