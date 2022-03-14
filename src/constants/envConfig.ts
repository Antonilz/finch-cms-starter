type Config = Record<
  string,
  {
    assetPrefix: string;
    apiEndpoint: string;
    isTestEnv: boolean;
  }
>;

export const envConfig: Config = {
  PROD: {
    assetPrefix: 'https://site.dev.finch.fm',
    apiEndpoint: 'https://site.dev.finch.fm/finch/cms/graphql',
    isTestEnv: false,
  },
  DEV: {
    assetPrefix: 'https://site.dev.finch.fm',
    apiEndpoint: 'https://site.dev.finch.fm/finch/cms/graphql',
    isTestEnv: true,
  },
};
