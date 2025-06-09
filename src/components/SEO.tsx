import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Shubham Agnihotri | Senior Data Scientist',
  description = 'Shubham Agnihotri - Senior Data Scientist at IDFC First Bank, Public Speaker, Content Creator, and ML Engineer. Driving innovation through data science.',
  keywords = 'data science, machine learning, public speaking, AI, ML engineer, content creator',
  author = 'Shubham Agnihotri',
  ogType = 'website',
  ogImage = '/images/profile-og.jpg',
  twitterCard = 'summary_large_image',
  twitterSite = '@shubhamagnihotri',
  twitterImage = '/images/profile-twitter.jpg',
  canonicalUrl,
}) => {
  const siteUrl = window.location.origin;
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const fullTwitterImageUrl = twitterImage.startsWith('http') ? twitterImage : `${siteUrl}${twitterImage}`;
  const fullCanonicalUrl = canonicalUrl ? canonicalUrl : window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullTwitterImageUrl} />
      <link rel="canonical" href={fullCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;
