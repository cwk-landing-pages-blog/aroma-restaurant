import React from 'react';
import styles from './service.module.scss';
import Image from 'next/image';
import backLayer from '@/assets/backgrounds/back-layer.svg';
import Link from 'next/link';

const ServiceCard = ({ img, title, link }) => {
  const imgAlt = img?.alternativeText + 'service image';

  const category = link.split('#')[1]

  return (
    <Link href={link} className='flex flex-col items-center w-full mt-8'>
      <>
      <div className={styles.card_wrapper}>
        <Image src={backLayer} className={styles.backImg} alt='back layer' />
        <div className={styles.card}>
          <Image priority src={img?.url} alt={imgAlt} quality={50} width={300} height={360}  className={styles.cardImg} />
        </div>
      </div>
      <h2 className='my-4 text-white text-2xl md:text-3xl font-semibold text-center'>
        {title}
      </h2>
      {/* if he asks for more details */}
      <h4 className='text-gold-400 text-xl border-b-2 hover:border-gold-400 border-b-transparent'>
        View all {category}
      </h4>
      </>
    </Link>
  );
};

export default ServiceCard;
