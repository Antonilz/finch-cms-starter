import { stringify } from 'qs';

import { envConfig } from '~constants/envConfig';

enum optionsKeys {
  width = 'w',
  height = 'h',
}

type OptionsProps = { [key in keyof typeof optionsKeys]: number | string };

const env = process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV';

export const formatAssetUrl = ({
  url,
  options,
}: {
  url: string;
  options?: OptionsProps;
}) => {
  if (!options) {
    return `${envConfig[env].assetPrefix}/images/${url}`;
  }

  const stringifiedOptions = stringify(options);

  // eslint-disable-next-line
  return `${envConfig[env].assetPrefix}/imagesweserv/?${stringifiedOptions}&fit=cover&url=${envConfig[env].assetPrefix}/images/${url}`;
};
