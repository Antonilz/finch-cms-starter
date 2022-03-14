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
  FORM = 'Form',
}

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

type TextField = {
  title: string;
  text: string;
};

export type Hero = TextField;

type Tag = {
  title: string;
};

export type Tags = {
  items: DataField<Tag>;
};

export type PageBlocks = {
  [BlockTypes.HERO]: TextField;
  [BlockTypes.BLOCK]: Block;
};

export type PageDataItem = {
  [P in keyof PageBlocks]: { type: P; data: PageBlocks[P] };
}[keyof PageBlocks];

export type PageData = {
  title: string;
  description: string;
  image: string;
  article: boolean;
  blocks: Array<PageDataItem>;
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
