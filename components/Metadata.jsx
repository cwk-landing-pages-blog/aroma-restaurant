import Head from 'next/head';
import React from 'react';
import { version } from '../package.json';

const Metadata = ({
  title = 'Aroma Restaurant',
  image = 'https://strapi-cwk.s3.eu-south-1.amazonaws.com/spageti_01653c3bc8.jpg',
  description = 'Landing Page for Aroma italian restaurant',
  author = 'kolpaja',
  copyright = 'codewithkoli',
  siteName = 'Aroma - Italian Restaurant',
  generator = 'NextJS',
  robots = 'all',
  ogType = 'website',
  twitterCard = 'summary',
  url = '',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='app:version' content={version} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='manifest' href='favicons/manifest.json' />
      <link rel='author' href='humans.txt' />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      {/* <link rel="canonical" href={canonicalUrl} /> */}
      <meta name='author' content={author} />
      <meta name='copyright' content={copyright} />
      <meta name='locale' content='en' />
      <meta name='generator' content={generator} />
      <meta name='base_url' content={url} />
      <meta name='robots' content={robots} />
      <meta name='language' content='en' />
      <meta name='twitter:widgets:csp' content='on' />
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:url' content={url} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content='en' />
      <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.json' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
};

export default Metadata;
