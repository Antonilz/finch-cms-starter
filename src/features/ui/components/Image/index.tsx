import NextImage, {
  ImageProps as NextImageProps,
  ImageLoaderProps,
} from 'next/image';

import { formatAssetUrl } from '~utils/formatAssetUrl';

type ImageProps = NextImageProps;

const loader = ({ src, width }: ImageLoaderProps) => {
  return formatAssetUrl({ url: src, options: { width } });
};

export const Image = ({ src, ...props }: ImageProps) => {
  return <NextImage src={src} loader={loader} {...props} />;
};
