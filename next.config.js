const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
//const optimizedImages = require('next-optimized-images');

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['https://app.cms.finch.fm'],
    deviceSizes: [640, 760, 828, 1080, 1200, 1920],
    imageSizes: [300, 380, 640, 1024, 1280],
    // Workaround to support 'next export' with next/image
    // https://github.com/vercel/next.js/issues/21079
    loader: 'imgix',
    path: 'https://noop/',
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    config.module.rules.push({
      test: /\.(png|jpg|svg)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        publicPath: `_next/static/images`,
        outputPath: 'static/images',
      },
    });

    config.module.rules.push({
      test: /\.(mp4)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        publicPath: `_next/static/videos`,
        outputPath: 'static/videos',
      },
    });

    return config;
  },
};

module.exports = withPlugins([
  // [
  //   optimizedImages,
  //   {
  //     inlineImageLimit: -1,
  //     optimizeImages: true,
  //     responsive: {
  //       sizes: [320, 360, 600, 768],
  //       placeholder: true,
  //       placeholderSize: 40,
  //     },
  //     mozjpeg: {
  //       quality: 80,
  //     },
  //     gifsicle: {
  //       interlaced: true,
  //       optimizationLevel: 3,
  //     },
  //     svgo: {
  //       plugins: [{ removeViewBox: false }],
  //     },
  //   },
  // ],
  [
    new webpack.DefinePlugin(),
    {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  ],
  nextConfig,
]);
