import { envConfig } from '~constants/envConfig';

enum optionsKeys {
  width = 'w',
  height = 'h',
}

type OptionsProps = { [key in keyof typeof optionsKeys]: number };

const env = process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV';

function stringifyOptions(options: OptionsProps) {
  return Object.entries(options)
    .map(
      ([name, value]) =>
        `${optionsKeys[name as keyof typeof optionsKeys]}=${value}`
    )
    .join('=');
}

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

  const stringifiedOptions = stringifyOptions(options);

  // eslint-disable-next-line
  return `${envConfig[env].assetPrefix}/imagesweserv/?${stringifiedOptions}&fit=cover&url=${envConfig[env].assetPrefix}/images/${url}`;
};
