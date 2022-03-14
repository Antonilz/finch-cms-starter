import { Link } from '~features/ui/types';

type DataField<P, T = string> = Array<{
  data: P;
  type: T;
}>;

export enum PageMenuTypes {
  MAIN = 'main',
}

export type MenuData = {
  items: DataField<Link>;
  name: string;
};

export type MosaicItem = TextField & {
  image: string;
  width: number;
  href: string;
  buttonHref: string;
  buttonTitle: string;
};

export const enum BlockTypes {
  HEADER = 'Header',
  MOSAIC = 'Mosaic',
  ARTICLE_TEXT = 'ArticleText',
  ARTICLE_LIST = 'ArticleList',
  FORM = 'Form',
}

export type Mosaic = TextField & {
  type: `${BlockTypes}`;
  tags: DataField<Tag>;
  fulltext?: string;
  columnsCount: number;
  items: DataField<MosaicItem>;
  buttonHref?: string;
  buttonTitle?: string;
  compact?: boolean;
};

export type ArticleText = { text: string };

type TextField = {
  title: string;
  text: string;
};

export type Header = TextField;

type Tag = {
  title: string;
};

export type Tags = {
  items: DataField<Tag>;
};

export type PageBlocks = {
  [BlockTypes.HEADER]: Header;
  [BlockTypes.MOSAIC]: Mosaic;
  [BlockTypes.ARTICLE_TEXT]: ArticleText;
};

export type PageDataItem = {
  [P in keyof PageBlocks]: { type: P; data: PageBlocks[P] };
}[keyof PageBlocks];

export type PageData = {
  title: string;
  description: string;
  image: string;
  isArticle: boolean;
  blocks: Array<PageDataItem>;
  url: string;
  black: boolean;
};

export type ConfigData = {
  name: string;
  headScript: string;
  bodyScript: string;
};

export type PageListData = {
  PageQuery: {
    list: {
      documents: Array<PageData>;
    };
  };
};

type Button = {
  text: string;
  color: string;
  url: string;
};

export type Interview = TextField & {
  button: DataField<Button>;
  socialLinks?: DataField<Link>;
  signUpButton: DataField<Button>;
  gradientColor: string;
};
