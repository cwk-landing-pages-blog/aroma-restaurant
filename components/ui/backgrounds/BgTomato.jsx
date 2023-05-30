import React from "react";
import bgLeaves from '@/assets/backgrounds/bg-tomato.png'
import Image from "next/image";


const BgTomato = () => {
  return <Image className="absolute -z-10 left-0 bottom-0" src={bgLeaves}  width={343} height={353} alt='background leaves'/>;
};

export default BgTomato;
