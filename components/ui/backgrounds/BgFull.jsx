import React from "react";
import full from '@/assets/backgrounds/full.png'
import Image from "next/image";


const BgFull = () => {
  return <Image className="absolute -z-10 top-0 left-0" src={full}  width={921} height={1025} alt='background garlic'/>;
};

export default BgFull;
