import Link from 'next/link';
import React from 'react';

const ExternalLink = ({ href, title, icon }) => {
  return (
    <Link href={href} target='_blank' className='text-xl flex items-center gap-2'>
      {icon ? icon : null}
      <h3 className='text-gold-400'>
      {title}
      </h3>
    </Link>
  );
};

export default ExternalLink;
