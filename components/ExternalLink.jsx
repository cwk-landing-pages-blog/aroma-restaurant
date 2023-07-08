import React from 'react';

const ExternalLink = ({ href, title, icon }) => {
  return (
    <a href={href} target='_blank' className='text-xl flex items-center gap-2' title={title}>
      {icon ? icon : null}
      <h3 className='text-gold-400'>
      {title}
      </h3>
    </a>
  );
};

export default ExternalLink;
