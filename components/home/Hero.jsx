import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import TitleSection from '../ui/TitleSection';
import call from '@/assets/icons/call.png'
import { headerContacts } from '@/utils/constants';


export default function Hero({ hero }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={(props) => console.log('slide change', props)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {hero?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className='hero_content'>
                <Image
                  src={item?.img?.data?.attributes?.url}
                  className='hero_img'
                  alt='Italian Pasta'
                  width={1600}
                  height={600}
                />

                <section className='content absolute lg:top-1/4 top-48 px-2'>
                  <TitleSection
                    title={item?.section?.title}
                    subtitle={item?.section?.subtitle}
                    hasDivider={item?.section?.hasDivider}
                    description={item?.section?.description}
                  >
                    <Link href={`tel:${headerContacts.tel}`} className='pt-20 text-center flex justify-center flex-col items-center'>
                      <h3 className='text-white text-2xl text-center pb-2'>
                        Booking is one call away
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
                  </TitleSection>
                </section>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
