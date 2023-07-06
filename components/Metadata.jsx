import Head from "next/head";
import React from "react";
import { version } from '../package.json';

const Metadata = ({
  title= 'Aroma Restaurant',
  image = '',
  description = 'Landing Page for Aroma italian restaurant',
  author = 'kolpaja',
  copyright = 'codewithkoli',
  siteName = 'Aroma - Italian Restaurant',
  generator = 'NextJS',
  robots = 'all',
  ogType = 'website',
  twitterCard = 'summary',
  url=''
}) => {
  return <Head>
     <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="app:version" content={version} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="manifest" href="favicons/manifest.json" />
      <link rel="author" href="humans.txt" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* <link rel="canonical" href={canonicalUrl} /> */}
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="locale" content="en" />
      <meta name="generator" content={generator} />
      <meta name="base_url" content={url} />
      <meta name="robots" content={robots} />
      <meta name="language" content="en" />
      <meta name="twitter:widgets:csp" content="on" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en" />
  </Head>;
};

export default Metadata;
