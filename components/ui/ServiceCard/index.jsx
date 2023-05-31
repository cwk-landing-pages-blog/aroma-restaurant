import React from 'react';
import styles from './service.module.scss';
import Image from 'next/image';
import backLayer from '@/assets/backgrounds/back-layer.svg';
import { getImgUrl } from '@/utils/getImgUrl';
import Link from 'next/link';

const ServiceCard = ({ img, title, link }) => {
  const imgAlt = img.alternativeText + 'service image';
  const imgUrl = getImgUrl(img.url);

  return (
    <div className='flex flex-col items-center w-full mt-8'>
      <div className={styles.card_wrapper}>
        <Image src={backLayer} className={styles.backImg} alt='back layer' />
        <div className={styles.card}>
          <img src={imgUrl} alt={imgAlt} className={styles.cardImg} />
        </div>
      </div>
      <h2 className='my-4 text-white text-2xl md:text-3xl font-semibold text-center'>
        {title}
      </h2>
      {/* if he asks for more details */}
      {/* <Link href={link} className='text-gold-400 text-xl border-b-2 hover:border-gold-400 border-b-transparent'>
        View All
      </Link> */}
    </div>
  );
};

export default ServiceCard;
