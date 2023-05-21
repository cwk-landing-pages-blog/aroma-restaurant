import Head from 'next/head';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/footer';
import Layout from '@/components/Layout';
import OurStory from '@/components/home/OurStory';
import SpecialDish from '@/components/home/SpecialDish';
import RestaurantMenu from '@/components/home/RestaurantMenu';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import OurStrength from '@/components/home/OurStrength';
import Address from '@/components/home/Address';
import Hero from '@/components/home/hero';
import Testimonials from '@/components/home/testimonials';
import Faq from '@/components/home/faq';

export default function Home({ data }) {
  console.log('🚀 ~ file: index.js:15 ~ Home ~ data:', data);
  const { name, description, featured_image, slogans, hero_img } =
    data?.data?.attributes;

  const imgUrl =
    process.env.NEXT_PUBLIC_AROMA_URL + featured_image?.data?.attributes?.url;

  const heroImg =
    process.env.NEXT_PUBLIC_AROMA_URL + hero_img?.data?.attributes?.url;

  console.log({ heroImg });
  const mainSlogan = slogans?.data[0]?.attributes;
  const metadata = {
    title: name,
    description,
    image: imgUrl,
  };

  return (
    <Layout metadata={metadata}>
      <Head>
        <title>{name}</title>
        <meta
          name='description'
          content='Nextly is a free landing page template built with next.js & Tailwind CSS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar title={name} />

      {/* TODO hero + slogans + what we serve*/}
      <Hero img={heroImg} slogan={mainSlogan} />

      {/* TODO our story section */}
      <OurStory />

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
      <Faq />

      <Address />

      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    'https://strapi-e35o.onrender.com/api/aroma-restaurant?populate=*'
  );
  const aroma_data = await res.json();

  if (aroma_data) {
    return {
      props: {
        data: aroma_data,
      }, // will be passed to the page component as props
    };
  }
  return {
    props: {
      data: {},
    }, // will be passed to the page component as props
  };
}
