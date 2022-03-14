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
    assetPrefix: 'https://app.cms.finch.fm',
    apiEndpoint: 'https://app.cms.finch.fm/finch/cms/graphql',
    isTestEnv: false,
  },
  DEV: {
    assetPrefix: 'https://app.cms.finch.fm',
    apiEndpoint: 'https://app.cms.finch.fm/finch/cms/graphql',
    isTestEnv: true,
  },
};
