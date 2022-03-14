import { Image as BaseImage } from '~features/ui';
import { ImageWrapper } from './styles';

type ImageProps = { image: string };

export const Image = ({ image }: ImageProps) => (
  <ImageWrapper>
    <BaseImage
      key={image}
      src={image}
      objectFit="contain"
      objectPosition="top"
      layout="fill"
    />
  </ImageWrapper>
);
