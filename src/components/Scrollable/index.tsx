import React, { memo, useEffect, useState } from 'react';
import { useBrowser } from '~hooks/useBrowser';
import { Container, Inner } from './styles';

type ScrollableProps = {
  horizontal: boolean;
  vertical: boolean;
  className: string;
  as: React.ElementType;
};

interface ScrollablePropsWithStaticProps<TProps> extends React.FC<TProps> {
  Container?: typeof Container;
  Inner?: typeof Inner;
}

const _Scrollable: ScrollablePropsWithStaticProps<ScrollableProps> = ({
  horizontal = true,
  vertical = false,
  children,
  className = '',
  as = 'div',
}) => {
  const isBrowser = useBrowser();
  const [isDragging, setIsDragging] = useState(false);
  const handleSwipeStart = () => setIsDragging(true);
  const handleSwipeMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    const { movementX } = ev;

    if (movementX) {
      ev.currentTarget.scrollTo({
        left: ev.currentTarget.scrollLeft - movementX,
      });
    }
  };
  const handleSwipeEnd = () => setIsDragging(false);
  const handleMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  useEffect(() => {
    document.body.addEventListener('mouseup', handleSwipeEnd);

    return () => document.body.removeEventListener('mouseup', handleSwipeEnd);
  }, []);

  return (
    <Container className={className} onMouseMove={handleMove}>
      <Inner
        as={as}
        horizontal={isBrowser ? horizontal : false}
        vertical={isBrowser ? vertical : false}
        {...(horizontal
          ? {
              onMouseDown: handleSwipeStart,
              onMouseMove: isDragging ? handleSwipeMove : undefined,
              onMouseUp: isDragging ? handleSwipeEnd : undefined,
              onMouseLeave: isDragging ? handleSwipeEnd : undefined,
              isDragging,
            }
          : {})}
      >
        {children}
      </Inner>
    </Container>
  );
};

export const Scrollable = memo(_Scrollable);

(Scrollable as typeof _Scrollable).Container = Container;

(Scrollable as typeof _Scrollable).Inner = Inner;
