import React from "react";
import dividerSvg from '../../public/img/restaurant/separator.svg'
import Image from "next/image";


const Divider = () => {
  return  <div>
  <Image src={dividerSvg} alt='divider'  width={120} height={30} />
</div>;
};

export default Divider;
