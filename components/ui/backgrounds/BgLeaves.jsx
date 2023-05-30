import React from "react";
import bgLeaves from '@/assets/backgrounds/bg-transparent-leaves.png'
import Image from "next/image";


const BgLeaves = () => {
  return <Image className="absolute -z-10 top-0 right-0" src={bgLeaves}  width={343} height={353} alt='background leaves'/>;
};

export default BgLeaves;
