import { Mosaic as MosaicProps } from '../../types';
import { MosaicItem } from './MosaicItem';
import {
  Wrapper,
  Header,
  Subheader,
  Text,
  TagsBlock,
  Tag,
  Container,
  Button,
} from './styles';

export const Mosaic = ({
  text,
  fulltext,
  title,
  items,
  buttonHref,
  buttonTitle,
  tags,
  columnsCount = 3,
  compact = false,
}: MosaicProps) => {
  return (
    <Wrapper compact={compact}>
      {title && <Header dangerouslySetInnerHTML={{ __html: title }} />}
      {text ? <Subheader dangerouslySetInnerHTML={{ __html: text }} /> : null}
      {tags?.length ? (
        <TagsBlock>
          {tags.map(({ data: { title: tagTitle } }, index) => (
            <Tag key={index} dangerouslySetInnerHTML={{ __html: tagTitle }} />
          ))}
        </TagsBlock>
      ) : null}
      {items?.length ? (
        <Container $columnCount={columnsCount}>
          {items.map(({ data: blockData, type }, index) => {
            return (
              <MosaicItem
                key={index}
                totalColumnCount={columnsCount}
                type={type}
                {...blockData}
              />
            );
          })}
        </Container>
      ) : null}
      {fulltext && <Text dangerouslySetInnerHTML={{ __html: fulltext }} />}
      {buttonHref && <Button route={buttonHref}>{buttonTitle}</Button>}
    </Wrapper>
  );
};
