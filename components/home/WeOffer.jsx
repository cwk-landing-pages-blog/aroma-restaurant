import React from 'react';
import TitleSection from '../ui/TitleSection';
import ServiceCard from '../ui/ServiceCard';
import BgLeaves from '../ui/backgrounds/BgLeaves';
import BgTomato from '../ui/backgrounds/BgTomato';

const WeOffer = ({ title, services }) => {
  return (
    <div id='services' className='py-8 relative z-0 bg-black overflow-hidden'>
      <TitleSection
        title={title.title}
        hasDivider={title.hasDivider}
        subtitle={title.subtitle}
        className='z-0'
      >
        <p className='sm:flex pb-8  xl:hidden text-center text-blue-200 text-xl max-w-xs sm:max-w-md'>
          {title.description}
        </p>
      </TitleSection>

      {/* we offer services */}
      <div className='flex flex-col mt-8 items-center justify-between md:flex-col lg:flex-row  gap-16 my-6 mx-auto'>
        {
          services?.length > 0 ? services.map((service,index) => {
            if(index === 1){
              return(<div key={index} className='flex flex-col items-center justify-center relative pt-0 xl:pt-40 '>
                <h5 className='hidden xl:flex text-center text-blue-200 text-xl pb-4 absolute top-0 -left-36 -right-36 max-w-7xl'>
                  {title.description}
                </h5>
                <ServiceCard  title={service.title} img={service.img?.data?.attributes} link={service.action_link}/>
              </div>)
            }
            return(<ServiceCard key={index} img={service.img?.data?.attributes} title={service.title} link={service.action_link}/>)
          }) : null
        }
      </div>

      <BgLeaves />
      <BgTomato />
    </div>
  );
};

export default WeOffer;
