import React from "react";
import biber from '@/assets/backgrounds/biber.png'
import Image from "next/image";


const BgBiber = ({styles='bottom-4 left-0'}) => {
  return <Image className={`absolute z-10 + ${styles}`} src={biber}  width={143} height={153} alt='background garlic'/>;
};

export default BgBiber;
