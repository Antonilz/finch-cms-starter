import { useColorScheme } from '~features/ui/hooks/useColorScheme';
import { Block as BlockProps } from '../../types';
import { BlockSizeVariants } from './types';
import {
  Wrapper,
  Header,
  Subheader,
  Title,
  Text,
  TagsBlock,
  Tag,
  Container,
  Item,
  Content,
  Counter,
  Button,
} from './styles';

const getBlockType = (dataLength?: number) => {
  if (dataLength === 3) {
    return BlockSizeVariants.PRIMARY;
  }

  if (dataLength === 2 || dataLength === 4 || dataLength === 6) {
    return BlockSizeVariants.SECONDARY;
  }

  if (dataLength === 5) {
    return BlockSizeVariants.TERTIARY;
  }

  return BlockSizeVariants.DEFAULT;
};

export const Block: React.FC<BlockProps> = ({
  text,
  fulltext,
  title,
  blocks,
  buttonHref,
  buttonTitle,
  tags,
  counters,
  compact = false,
}) => {
  const blockType = getBlockType(blocks?.length);

  const [data] = useColorScheme();
  const isDarkTheme = Boolean(data?.isDarkTheme);

  return (
    <Wrapper compact={compact}>
      <Header dangerouslySetInnerHTML={{ __html: title }} />
      {text ? <Subheader dangerouslySetInnerHTML={{ __html: text }} /> : null}
      {tags?.length ? (
        <TagsBlock>
          {tags.map(({ data: { title: tagTitle } }, index) => (
            <Tag key={index} dangerouslySetInnerHTML={{ __html: tagTitle }} />
          ))}
        </TagsBlock>
      ) : null}
      {blocks?.length ? (
        <Container sizeType={blockType}>
          {blocks.map(
            (
              {
                data: {
                  title: blockTitle,
                  text: blockText,
                  image,
                  darkThemeImage,
                  href,
                  buttonHref: blockButtonHref,
                  buttonTitle: blockButtonTitle,
                },
              },
              index
            ) => (
              <Item
                key={index}
                route={href}
                image={isDarkTheme && darkThemeImage ? darkThemeImage : image}
                sizeType={blockType}
              >
                <Content>
                  {counters && <Counter>{index + 1}</Counter>}
                  {blockTitle && (
                    <Title dangerouslySetInnerHTML={{ __html: blockTitle }} />
                  )}
                  {blockText && (
                    <Text dangerouslySetInnerHTML={{ __html: blockText }} />
                  )}
                  {blockButtonHref && (
                    <Button route={blockButtonHref}>{blockButtonTitle}</Button>
                  )}
                </Content>
              </Item>
            )
          )}
        </Container>
      ) : null}
      {fulltext && <Text dangerouslySetInnerHTML={{ __html: fulltext }} />}
      {buttonHref && <Button route={buttonHref}>{buttonTitle}</Button>}
    </Wrapper>
  );
};
