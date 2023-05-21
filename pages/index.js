import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Layout from '@/components/Layout';

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
      <Hero img={heroImg} slogan={mainSlogan} />

      {/* TODO restaurant menu layout */}
      {/* <SectionTitle
        pretitle='Italian food Benefits'
        title=' Why should you use this landing page'
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      {/* <Benefits data={benefitOne} /> */}
      {/* <Benefits imgPos='right' data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle='Watch a video'
        title='Learn how to fullfil your needs'
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}

      {/* TODO add testimonials */}
      <SectionTitle
        pretitle='Testimonials'
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
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
