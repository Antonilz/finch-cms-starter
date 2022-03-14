import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { InfiniteScroll } from '~features/layout/components/InfiniteScroll';
import { Container as DefaultContainer } from '~features/ui/components/Container';
import getArticlesData from '~model/services/getArticlesData.query.graphql';

export const List = () => {
  const [page, setPage] = useState(0);

  const { loading, error, data, fetchMore } = useQuery(getArticlesData, {
    variables: {
      page,
      pageSize: 40,
    },
  });

  const { documents: items, hasMore } = data?.ArticleQuery?.list || {};

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage((prevPage) => prevPage + 1);

    fetchMore({
      variables: { page: newPage, pageSize: 40 },
    });
  };

  if (!items || error || loading) {
    return null;
  }

  return (
    <DefaultContainer>
      <InfiniteScroll
        itemsLength={items.length}
        fetchMore={handleLoadMore}
        hasMore={hasMore}
      >
        {items.map((item) => (
          <div key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </DefaultContainer>
  );
};
