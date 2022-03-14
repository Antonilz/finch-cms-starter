import {
  alignEnum,
  elementByVariant,
  elementEnum,
  variantEnum,
  textSizes,
  weightEnum,
} from './constants';
import { Text } from './styles';

export { getFontStyles } from './styles';

type TypographyProps = {
  align?: typeof alignEnum[keyof typeof alignEnum];
  children?: React.ReactNode;
  className?: string;
  color?: string;
  element?: React.ElementType;
  fluid?: boolean;
  inline?: boolean;
  marginBottom?: number | boolean;
  variant?: typeof variantEnum[keyof typeof variantEnum];
  size?: keyof typeof textSizes;
  weight?: typeof weightEnum[keyof typeof weightEnum];
  numOfLines?: number;
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({
  align = alignEnum.inherit,
  children,
  className,
  color,
  element,
  fluid = false,
  inline = false,
  marginBottom,
  variant = variantEnum.primary,
  numOfLines,
  size = 4,
  weight,
  ...props
}: TypographyProps) => {
  const as = element || elementByVariant[variant];
  const textMarginBottom = (() => {
    if (typeof marginBottom === 'undefined') {
      if (as === elementEnum.p) {
        return true;
      }

      return false;
    }
    return marginBottom;
  })();

  return (
    <Text
      align={align}
      as={as}
      className={className}
      color={color}
      $fluid={fluid}
      $inline={inline}
      $marginBottom={textMarginBottom}
      variant={variant}
      $numOfLines={numOfLines}
      size={size}
      weight={weight}
      {...props}
    >
      {children}
    </Text>
  );
};
