import { LinkOverlay, Typography } from '~features/ui';
import { MosaicItem as MosaicItemType } from '../../../types';
import { Image } from './Image';
import {
  Title,
  Text,
  Item,
  Badge,
  PinnedToBottomWrapper,
  Content,
} from './styles';

const enum BlockTypes {
  IMAGE = 'Image',
  TEXT = 'Text',
  STAT = 'Stat',
  BOX = 'MosaicItem',
}

type BlockItemProps = MosaicItemType & {
  totalColumnCount?: number;
  counter?: number;
  dark?: boolean;
  type: `${BlockTypes}`;
};

export const MosaicItem = ({
  title,
  text,
  image,
  href,
  width,
  totalColumnCount = 3,
  counter,
  dark,
  type,
}: BlockItemProps) => {
  const hasClickableContent = Boolean(href);

  const onClick = () => {
    console.log('click');
  };

  return (
    <Item
      image={image}
      $columnWidth={width}
      $totalColumnCount={totalColumnCount}
      dark={Boolean(dark)}
      hasHoverEffect={hasClickableContent}
      onClick={onClick}
      bare={
        !([BlockTypes.BOX, BlockTypes.STAT] as `${BlockTypes}`[]).includes(type)
      }
      compact={([BlockTypes.STAT] as `${BlockTypes}`[]).includes(type)}
    >
      <Content>
        {type === BlockTypes.IMAGE && <Image image={image} />}
        {type === BlockTypes.TEXT && (
          <Typography
            dangerouslySetInnerHTML={{ __html: text }}
            element="div"
          />
        )}
        {type === BlockTypes.BOX && (
          <>
            {counter && (
              <Badge>
                {counter ? <span>{`${counter}`.padStart(2, '0')}</span> : null}
              </Badge>
            )}
            {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
            <PinnedToBottomWrapper>
              {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
              {href && <LinkOverlay route={href}>{href}</LinkOverlay>}
            </PinnedToBottomWrapper>
          </>
        )}
      </Content>
    </Item>
  );
};
