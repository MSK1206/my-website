import React from "react";
import Head from "next/head";
import { MetaTypes } from "@/types/metatypes";

export const SeoHead = ({
  title,
  titleTemplate,
  description,
  siteUrl,
  canonicalUrl,
  ogUrl,
  ogType,
  ogImg,
  twitterUrl,
}: MetaTypes) => {
  const siteTitle = `${title} | ${titleTemplate} `;
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content={titleTemplate} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={twitterUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImg} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    </Head>
  );
};
