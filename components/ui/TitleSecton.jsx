import React from 'react';
import Divider from './Divider';

const TitleSection = ({
  title,
  hasDivider,
  subtitle,
  description,
  children,
}) => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      {title ? (
        <h2 className='uppercase text-lg text-gold-400'>{title}</h2>
      ) : null}

      {hasDivider ? <Divider /> : null}

      {subtitle ? (
        <h1 className='uppercase text-center text-white text-xl md:text-2xl lg:text-3xl  xl:text-4xl font-black'>{subtitle}</h1>
      ) : null}

      {description ? (
        <p className='text-center sm:max-w-xs text-green-100 font-black text-base md:text-xl   shadow-slate-700 lg:w-full'>
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
};

export default TitleSection;
