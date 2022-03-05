import { useSelector } from 'react-redux';

import { getScreenWidth } from '~features/ui/model/selectors';
import { media, Breakpoints } from '~theme/breakpoints';

export const useBreakpoint = (
  comparedBreakpoint?: keyof typeof Breakpoints
) => {
  const screenWidth = useSelector(getScreenWidth);
  const isDesktop = screenWidth && screenWidth > media.breakpoints.lg;
  const isTablet =
    screenWidth &&
    screenWidth > media.breakpoints.sm &&
    screenWidth <= media.breakpoints.lg;
  const isMobile = screenWidth && screenWidth <= media.breakpoints.sm;
  const isExceedScreenWidth = Boolean(
    comparedBreakpoint &&
      screenWidth &&
      screenWidth < media.breakpoints[comparedBreakpoint]
  );

  return { isDesktop, isTablet, isMobile, isExceedScreenWidth };
};
