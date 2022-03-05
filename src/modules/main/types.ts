// import { MetaTags } from '~components/MetaTags/types';
import { Link } from '~features/ui/types';
import { Hero } from './components/Hero';

type DataField<P, T = string> = Array<{
  data: P;
  type: T;
}>;

export enum PageMenuTypes {
  LEAD = 'lead',
  MAIN = 'main',
}

export type MenuData = {
  items: DataField<Link>;
  code: string;
};

export type Block = TextField & {
  type: `${BlockTypes}`;
  tags: DataField<Tag>;
  fulltext?: string;
  counters: boolean;
  blocks: DataField<BlockItem>;
  buttonHref?: string;
  buttonTitle?: string;
  compact?: boolean;
};

type BlockItem = TextField & {
  image: string;
  darkThemeImage: string;
  href: string;
  buttonHref: string;
  buttonTitle: string;
};

export const enum BlockTypes {
  HERO = 'Hero',
  BLOCK = 'FinchSitePageBlock',
  INTERVIEW = 'Interview',
  NEW_YEAR = 'NewYear',
  FORM = 'Form',
}

type TextField = {
  title: string;
  text: string;
};

export type Hero = TextField & {
  type: `${BlockTypes}`;
};

export type NewYear = TextField & {
  url: string;
  button: DataField<Button>;
};

type PageDataItem<
  T extends
    | BlockTypes.HERO
    | BlockTypes.BLOCK
    | BlockTypes.NEW_YEAR
    | BlockTypes.FORM
> = {
  type: T;
  data: PageBlock<T>;
};

export type PageBlock<T> = T extends BlockTypes.HERO
  ? Hero
  : T extends BlockTypes.BLOCK
  ? Block
  : T extends BlockTypes.NEW_YEAR
  ? NewYear
  : null;

export type PageData = {
  title: string;
  description: string;
  image: string;
  article: boolean;
  blocks: Array<
    | PageDataItem<BlockTypes.HERO>
    | PageDataItem<BlockTypes.BLOCK>
    | PageDataItem<BlockTypes.NEW_YEAR>
  >;
  lead: DataField<Interview, BlockTypes.INTERVIEW>;
  urn: string;
  black: boolean;
};

export type ConfigData = {
  title: string;
  headscript: string;
  bodyscript: string;
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

type Tag = {
  title: string;
};

export type Tags = {
  items: DataField<Tag>;
};
