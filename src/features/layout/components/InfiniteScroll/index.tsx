import React from 'react';
import DefaultInfiniteScroll from 'react-infinite-scroll-component';

type InfiniteScrollProps = {
  className?: string;
  fetchMore: () => void;
  itemsLength: number;
  hasMore: boolean;
  loader?: React.ReactNode;
  children: React.ReactNode;
};

export const InfiniteScroll = ({
  className,
  fetchMore,
  itemsLength,
  hasMore,
  loader,
  children,
}: InfiniteScrollProps) => (
  <DefaultInfiniteScroll
    className={className}
    dataLength={itemsLength}
    next={fetchMore}
    hasMore={hasMore}
    loader={loader}
  >
    {children}
  </DefaultInfiniteScroll>
);
