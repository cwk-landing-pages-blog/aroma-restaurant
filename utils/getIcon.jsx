import { AiFillInstagram } from 'react-icons/ai';
import { BsBookmarkHeartFill, BsFacebook } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';

const iconMap = {
  instagram : <AiFillInstagram />,
  facebook : <BsFacebook />,
}

export const getIcon = (name) => name ? iconMap[name] : null