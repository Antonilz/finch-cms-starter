import React from 'react';
import Head from 'next/head';
import { formatAssetUrl } from '~utils/formatAssetUrl';

import { MetaTags as MetaTagsProps } from './types';

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  image,
  custom,
}) => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />
    <title>{title}</title>
    <meta property="og:title" content={title} />
    {description && (
      <>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </>
    )}
    {image && (
      <meta property="og:image" content={formatAssetUrl({ url: image })} />
    )}
    {custom}
  </Head>
);
