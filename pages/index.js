import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/ui/footer';
import Layout from '@/components/Layout';
import OurStory from '@/components/home/OurStory';
import SpecialDish from '@/components/home/SpecialDish';
import RestaurantMenu from '@/components/home/RestaurantMenu';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import OurStrength from '@/components/home/OurStrength';
import Address from '@/components/home/Address';
import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';
import Faq from '@/components/home/Faq';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import WeOffer from '@/components/home/WeOffer';

export default function Home({ page, hero, weOffer, ourStrength, menu }) {
  console.log({ page, hero, weOffer, ourStrength, menu });

  const title = page?.name;
  const metadata = {
    title,
    description: page?.description,
    image: '',
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <title>{title}</title>
      </Head>

      {/* TODO hero + slogans + what we serve*/}
      <Hero hero={hero} />

      {/* weOffer */}
      <WeOffer {...weOffer} />
      {/* TODO our story section */}
      <OurStory
        img={page.our_story_img.data.attributes}
        title={page.our_story_title}
      />

      {/* Special Dish, featured dish comes along with the info that as The Meal of the dat */}
      <SpecialDish />

      {/* tab menu for each category main ones */}
      <RestaurantMenu />

      {/* featured carousel menu items */}
      <FeaturedMenu />

      {/* Testimonials */}
      <Testimonials />

      {/* Our strength section */}
      <OurStrength />

      {/* FAQ section */}
      {/* <Faq /> */}

      <Address />

      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const pageRes = await fetch(
    process.env.NEXT_PUBLIC_AROMA_API + '?populate=*'
  );
  const menuItemsRes = await fetch(
    process.env.NEXT_PUBLIC_AROMA_API +
      '?populate[0]=menu_items.price.currencies'
  );
  const hero_res = await fetch(
    process.env.NEXT_PUBLIC_AROMA_API +
      '?populate[0]=hero&populate[1]=hero.img&populate[2]=hero.content'
  );
  const weOfferRes = await fetch(
    process.env.NEXT_PUBLIC_AROMA_API +
      '?populate[0]=we_offer_service_item.featured_img.data.attributes.url&populate[1]=we_offer_service'
  );

  const ourStrengthRes = await fetch(
    process.env.NEXT_PUBLIC_AROMA_API + '?populate[0]=service_item.featured_img'
  );

  const aroma_data = await pageRes.json();
  const menuItems = await menuItemsRes.json();
  const hero = await hero_res.json();
  const weOffer = await weOfferRes.json();
  const ourStrength = await ourStrengthRes.json();

  if (
    aroma_data?.data?.attributes &&
    hero?.data?.attributes?.hero &&
    menuItems?.data?.attributes?.menu_items &&
    weOffer?.data?.attributes?.we_offer_service_item &&
    ourStrength?.data?.attributes?.service_item
  ) {
    return {
      props: {
        page: aroma_data?.data?.attributes,
        menu: {
          title: aroma_data?.data?.attributes?.menu_items_title,
          items: menuItems?.data?.attributes?.menu_items,
        },
        hero: hero?.data?.attributes?.hero,
        ourStrength: {
          title: aroma_data?.data?.attributes?.our_story_title,
          cards: ourStrength?.data?.attributes?.service_item,
        },
        weOffer: {
          title: aroma_data?.data?.attributes?.we_offer_service,
          services: weOffer?.data?.attributes?.we_offer_service_item,
        },
      }, // will be passed to the page component as props
    };
  }
  return {
    notFound: true,
  };
}
