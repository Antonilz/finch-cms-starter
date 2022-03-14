import { useState } from 'react';

import { InfiniteScroll } from '~features/layout/components/InfiniteScroll';
import { Container, Link } from '~features/ui';
import { FilterOperator } from '~types';
import { usePageDataQuery } from '../../model/__generated__/getPageData';

export const ArticleList = () => {
  const [page, setPage] = useState(0);

  const { loading, error, data, fetchMore } = usePageDataQuery({
    variables: {
      page,
      pageSize: 40,
      filters: [
        {
          field: 'isArticle',
          operator: FilterOperator.Equals,
          value: true,
        },
      ],
    },
  });

  const { documents: items, hasMore } = data?.PageQuery?.list || {};

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
    <Container>
      <InfiniteScroll
        itemsLength={items.length}
        fetchMore={handleLoadMore}
        hasMore={hasMore}
      >
        {items.map((item) => (
          <Link key={item.url} route={item.url}>
            Read article, url: {item.url}
          </Link>
        ))}
      </InfiniteScroll>
    </Container>
  );
};
