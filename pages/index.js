import Head from 'next/head';
import Footer from '../components/ui/footer';
import Layout from '@/components/Layout';
import OurStory from '@/components/home/OurStory';
import SpecialDish from '@/components/home/SpecialDish';
import RestaurantMenu from '@/components/home/RestaurantMenu';
// import FeaturedMenu from '@/components/home/FeaturedMenu';
// import OurStrength from '@/components/home/OurStrength';
import Address from '@/components/home/Address';
import Hero from '@/components/home/Hero';
// import Testimonials from '@/components/home/Testimonials';
// import Faq from '@/components/home/Faq';
// import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import WeOffer from '@/components/home/WeOffer';
import { getAllPageData } from '@/utils/api';
import { s3BucketsImgUrl } from '@/utils/constants';

export default function Home({ data, isError }) {
  const title = 'Aroma Restaurant';

  if (data === undefined && data?.data?.attributes === undefined && isError) {
    return (
      <Layout>
        <Head>
          <title>Home - Aroma Restaurant</title>
        </Head>
      </Layout>
    );
  }
  // console.log('🚀 ~ file: index.js:18 ~ Home ~ data:', data?.data?.attributes);

  const {
    heros,
    we_offer_title,
    we_offer_items,
    our_story_title,
    special_section,
    menu_items,
    menu_title,
    google_map_location,
    social_networks,
    description,
  } = data?.data?.attributes;

  const metadata = {
    title,
    description,
    image: s3BucketsImgUrl.home,
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <title>{title}</title>
      </Head>

      <Hero hero={heros} />

      {/* weOffer */}
      <WeOffer title={we_offer_title} services={we_offer_items} />
      {/* TODO our story section */}
      <OurStory title={our_story_title} />

      {/* Special Dish, featured dish comes along with the info that as The Meal of the dat */}
      <SpecialDish title={special_section} />

      {/* tab menu for each category main ones */}
      <RestaurantMenu title={menu_title} items={menu_items} />

      {/* featured carousel menu items */}
      {/* <FeaturedMenu /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Our strength section */}
      {/* <OurStrength /> */}

      {/* FAQ section */}
      {/* <Faq /> */}

      <Address address={google_map_location} contact={social_networks} />

      <Footer socials={social_networks} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const result = await getAllPageData();

  if (result?.data !== undefined && result !== undefined) {
    return {
      props: {
        isError: false,
        data: result.data,
      },
    };
  }

  return {
    props: {
      data: null,
      isError: true,
    },
  };
}
