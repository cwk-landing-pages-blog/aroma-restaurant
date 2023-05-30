import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';
import cutlery from '../../public/icons/cutlery-out.png';
import TitleSection from '../ui/TitleSection';
import call from '@/assets/icons/call.png'
import { headerContacts } from '@/utils/constants';


export default function Hero({ hero }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(props) => console.log('slide change', props)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {hero.map((item) => {
          const imgUrl =
            process.env.NEXT_PUBLIC_RENDER_URL +
            item?.img?.data?.attributes?.url;
          return (
            <SwiperSlide key={item.id}>
              <div className='hero_content'>
                <Image
                  src={imgUrl}
                  className='hero_img'
                  alt='Italian Pasta'
                  width={1600}
                  height={600}
                />

                <section className='content absolute lg:top-1/4 top-48'>
                  <TitleSection
                    title={item.content.title}
                    subtitle={item.content.subtitle}
                    hasDivider={item.content.hasDivider}
                    description={item.content.description}
                  >
                    <Link
                      href={item.content.cta_href}
                      className='content_btn text-gold-400 text-xl flex gap-4 '
                    >
                      <Image
                        src={cutlery}
                        width={65}
                        height={50}
                        alt='cutlery logo'
                      />
                      <div>
                        <p className='text-2xl text-white font-bold font-serif text-center'>
                          Order
                        </p>
                        <p className='text-xl text-white font-bold font-serif text-center'>
                          Now
                        </p>
                      </div>
                    </Link>

                    <Link href={`tel:${headerContacts.tel}`} className='pt-16 text-center flex justify-center flex-col items-center'>
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
