import React from "react";
import garlic from '@/assets/backgrounds/garlic.png'
import Image from "next/image";


const BgGarlic = () => {
  return <Image className="absolute -z-10 bottom-86 md:bottom-0 xl:top-60 left-10" src={garlic}  width={143} height={153} alt='background garlic'/>;
};

export default BgGarlic;
