export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Color: any;
  DateTime: string;
  Gallery: any;
  Image: string;
  Json: any;
  Long: any;
  Map_String_EntityDescriptor_Scalar: any;
  Map_String_List_Scalar: any;
  Map_String_Map_Scalar: any;
  Text: string;
  Void: any;
  Wysiwyg: any;
};

export enum ActionType {
  Mutation = 'MUTATION',
  Query = 'QUERY',
}

export type BlockIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  content: InputMaybe<Scalars['Json']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type BlockList = {
  __typename?: 'BlockList';
  documents: Maybe<Array<Maybe<BlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type BlockMutation = {
  __typename?: 'BlockMutation';
  create: Maybe<BlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<BlockOut>;
};

export type BlockMutationCreateArgs = {
  data: BlockIn;
};

export type BlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type BlockMutationUpdateArgs = {
  data: BlockIn;
  id: Scalars['String'];
};

export type BlockOut = {
  __typename?: 'BlockOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  content: Maybe<Scalars['Json']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type BlockQuery = {
  __typename?: 'BlockQuery';
  get: Maybe<BlockOut>;
  list: Maybe<BlockList>;
};

export type BlockQueryGetArgs = {
  id: Scalars['String'];
};

export type BlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type BoxesBlockIn = {
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type BoxesBlockItemIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Wysiwyg']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type BoxesBlockItemList = {
  __typename?: 'BoxesBlockItemList';
  documents: Maybe<Array<Maybe<BoxesBlockItemOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type BoxesBlockItemMutation = {
  __typename?: 'BoxesBlockItemMutation';
  create: Maybe<BoxesBlockItemOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<BoxesBlockItemOut>;
};

export type BoxesBlockItemMutationCreateArgs = {
  data: BoxesBlockItemIn;
};

export type BoxesBlockItemMutationDeleteArgs = {
  id: Scalars['String'];
};

export type BoxesBlockItemMutationUpdateArgs = {
  data: BoxesBlockItemIn;
  id: Scalars['String'];
};

export type BoxesBlockItemOut = {
  __typename?: 'BoxesBlockItemOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Wysiwyg']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type BoxesBlockItemQuery = {
  __typename?: 'BoxesBlockItemQuery';
  get: Maybe<BoxesBlockItemOut>;
  list: Maybe<BoxesBlockItemList>;
};

export type BoxesBlockItemQueryGetArgs = {
  id: Scalars['String'];
};

export type BoxesBlockItemQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type BoxesBlockList = {
  __typename?: 'BoxesBlockList';
  documents: Maybe<Array<Maybe<BoxesBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type BoxesBlockMutation = {
  __typename?: 'BoxesBlockMutation';
  create: Maybe<BoxesBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<BoxesBlockOut>;
};

export type BoxesBlockMutationCreateArgs = {
  data: BoxesBlockIn;
};

export type BoxesBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type BoxesBlockMutationUpdateArgs = {
  data: BoxesBlockIn;
  id: Scalars['String'];
};

export type BoxesBlockOut = {
  __typename?: 'BoxesBlockOut';
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type BoxesBlockQuery = {
  __typename?: 'BoxesBlockQuery';
  get: Maybe<BoxesBlockOut>;
  list: Maybe<BoxesBlockList>;
};

export type BoxesBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type BoxesBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ButtonIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['Color']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type ButtonList = {
  __typename?: 'ButtonList';
  documents: Maybe<Array<Maybe<ButtonOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ButtonMutation = {
  __typename?: 'ButtonMutation';
  create: Maybe<ButtonOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ButtonOut>;
};

export type ButtonMutationCreateArgs = {
  data: ButtonIn;
};

export type ButtonMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ButtonMutationUpdateArgs = {
  data: ButtonIn;
  id: Scalars['String'];
};

export type ButtonOut = {
  __typename?: 'ButtonOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['Color']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type ButtonQuery = {
  __typename?: 'ButtonQuery';
  get: Maybe<ButtonOut>;
  list: Maybe<ButtonList>;
};

export type ButtonQueryGetArgs = {
  id: Scalars['String'];
};

export type ButtonQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClientIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type ClientList = {
  __typename?: 'ClientList';
  documents: Maybe<Array<Maybe<ClientOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ClientMutation = {
  __typename?: 'ClientMutation';
  create: Maybe<ClientOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ClientOut>;
};

export type ClientMutationCreateArgs = {
  data: ClientIn;
};

export type ClientMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ClientMutationUpdateArgs = {
  data: ClientIn;
  id: Scalars['String'];
};

export type ClientOut = {
  __typename?: 'ClientOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type ClientQuery = {
  __typename?: 'ClientQuery';
  get: Maybe<ClientOut>;
  list: Maybe<ClientList>;
};

export type ClientQueryGetArgs = {
  id: Scalars['String'];
};

export type ClientQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClientsBlockIn = {
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Wysiwyg']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type ClientsBlockList = {
  __typename?: 'ClientsBlockList';
  documents: Maybe<Array<Maybe<ClientsBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ClientsBlockMutation = {
  __typename?: 'ClientsBlockMutation';
  create: Maybe<ClientsBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ClientsBlockOut>;
};

export type ClientsBlockMutationCreateArgs = {
  data: ClientsBlockIn;
};

export type ClientsBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ClientsBlockMutationUpdateArgs = {
  data: ClientsBlockIn;
  id: Scalars['String'];
};

export type ClientsBlockOut = {
  __typename?: 'ClientsBlockOut';
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Wysiwyg']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type ClientsBlockQuery = {
  __typename?: 'ClientsBlockQuery';
  get: Maybe<ClientsBlockOut>;
  list: Maybe<ClientsBlockList>;
};

export type ClientsBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type ClientsBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ClientsIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type ClientsList = {
  __typename?: 'ClientsList';
  documents: Maybe<Array<Maybe<ClientsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ClientsMutation = {
  __typename?: 'ClientsMutation';
  create: Maybe<ClientsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ClientsOut>;
};

export type ClientsMutationCreateArgs = {
  data: ClientsIn;
};

export type ClientsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ClientsMutationUpdateArgs = {
  data: ClientsIn;
  id: Scalars['String'];
};

export type ClientsOut = {
  __typename?: 'ClientsOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type ClientsQuery = {
  __typename?: 'ClientsQuery';
  get: Maybe<ClientsOut>;
  list: Maybe<ClientsList>;
};

export type ClientsQueryGetArgs = {
  id: Scalars['String'];
};

export type ClientsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type DirectionIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type DirectionList = {
  __typename?: 'DirectionList';
  documents: Maybe<Array<Maybe<DirectionOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type DirectionMutation = {
  __typename?: 'DirectionMutation';
  create: Maybe<DirectionOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<DirectionOut>;
};

export type DirectionMutationCreateArgs = {
  data: DirectionIn;
};

export type DirectionMutationDeleteArgs = {
  id: Scalars['String'];
};

export type DirectionMutationUpdateArgs = {
  data: DirectionIn;
  id: Scalars['String'];
};

export type DirectionOut = {
  __typename?: 'DirectionOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type DirectionQuery = {
  __typename?: 'DirectionQuery';
  get: Maybe<DirectionOut>;
  list: Maybe<DirectionList>;
};

export type DirectionQueryGetArgs = {
  id: Scalars['String'];
};

export type DirectionQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type DirectionsIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type DirectionsList = {
  __typename?: 'DirectionsList';
  documents: Maybe<Array<Maybe<DirectionsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type DirectionsMutation = {
  __typename?: 'DirectionsMutation';
  create: Maybe<DirectionsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<DirectionsOut>;
};

export type DirectionsMutationCreateArgs = {
  data: DirectionsIn;
};

export type DirectionsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type DirectionsMutationUpdateArgs = {
  data: DirectionsIn;
  id: Scalars['String'];
};

export type DirectionsOut = {
  __typename?: 'DirectionsOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type DirectionsQuery = {
  __typename?: 'DirectionsQuery';
  get: Maybe<DirectionsOut>;
  list: Maybe<DirectionsList>;
};

export type DirectionsQueryGetArgs = {
  id: Scalars['String'];
};

export type DirectionsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Document = {
  __typename?: 'Document';
  data: Maybe<Scalars['Json']>;
  deleted: Maybe<Scalars['Boolean']>;
  draftId: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  snapshot: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type EntityDescriptor = {
  __typename?: 'EntityDescriptor';
  actions: Maybe<Array<Maybe<ModelAction>>>;
  fields: Maybe<Array<Maybe<FieldDescriptor>>>;
  name: Maybe<Scalars['String']>;
  searchableRefField: Maybe<Scalars['String']>;
  securityRules: Maybe<Array<Maybe<SecurityRule>>>;
  withHistory: Maybe<Scalars['Boolean']>;
};

export type FieldDescriptor = {
  __typename?: 'FieldDescriptor';
  name: Maybe<Scalars['String']>;
  renderer: Maybe<Scalars['String']>;
  required: Maybe<Scalars['Boolean']>;
  types: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FieldValidationError = {
  __typename?: 'FieldValidationError';
  field: Maybe<Scalars['String']>;
  msg: Maybe<Scalars['String']>;
};

export enum FilterOperator {
  And = 'AND',
  Equals = 'EQUALS',
  Gt = 'GT',
  Gte = 'GTE',
  Ilike = 'ILIKE',
  Lt = 'LT',
  Lte = 'LTE',
  Or = 'OR',
  StartsWith = 'STARTS_WITH',
}

export type FinchSiteGalleryItemIn = {
  buttonHref: InputMaybe<Scalars['String']>;
  buttonTitle: InputMaybe<Scalars['String']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  darkThemeImage: InputMaybe<Scalars['Image']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type FinchSiteGalleryItemList = {
  __typename?: 'FinchSiteGalleryItemList';
  documents: Maybe<Array<Maybe<FinchSiteGalleryItemOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FinchSiteGalleryItemMutation = {
  __typename?: 'FinchSiteGalleryItemMutation';
  create: Maybe<FinchSiteGalleryItemOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FinchSiteGalleryItemOut>;
};

export type FinchSiteGalleryItemMutationCreateArgs = {
  data: FinchSiteGalleryItemIn;
};

export type FinchSiteGalleryItemMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FinchSiteGalleryItemMutationUpdateArgs = {
  data: FinchSiteGalleryItemIn;
  id: Scalars['String'];
};

export type FinchSiteGalleryItemOut = {
  __typename?: 'FinchSiteGalleryItemOut';
  buttonHref: Maybe<Scalars['String']>;
  buttonTitle: Maybe<Scalars['String']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  darkThemeImage: Maybe<Scalars['Image']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type FinchSiteGalleryItemQuery = {
  __typename?: 'FinchSiteGalleryItemQuery';
  get: Maybe<FinchSiteGalleryItemOut>;
  list: Maybe<FinchSiteGalleryItemList>;
};

export type FinchSiteGalleryItemQueryGetArgs = {
  id: Scalars['String'];
};

export type FinchSiteGalleryItemQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FinchSitePageBlockIn = {
  blocks: InputMaybe<Scalars['Json']>;
  buttonHref: InputMaybe<Scalars['String']>;
  buttonTitle: InputMaybe<Scalars['String']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  counters: InputMaybe<Scalars['Boolean']>;
  fulltext: InputMaybe<Scalars['Wysiwyg']>;
  id: InputMaybe<Scalars['String']>;
  tags: InputMaybe<Scalars['Json']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type FinchSitePageBlockList = {
  __typename?: 'FinchSitePageBlockList';
  documents: Maybe<Array<Maybe<FinchSitePageBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FinchSitePageBlockMutation = {
  __typename?: 'FinchSitePageBlockMutation';
  create: Maybe<FinchSitePageBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FinchSitePageBlockOut>;
};

export type FinchSitePageBlockMutationCreateArgs = {
  data: FinchSitePageBlockIn;
};

export type FinchSitePageBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FinchSitePageBlockMutationUpdateArgs = {
  data: FinchSitePageBlockIn;
  id: Scalars['String'];
};

export type FinchSitePageBlockOut = {
  __typename?: 'FinchSitePageBlockOut';
  blocks: Maybe<Scalars['Json']>;
  buttonHref: Maybe<Scalars['String']>;
  buttonTitle: Maybe<Scalars['String']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  counters: Maybe<Scalars['Boolean']>;
  fulltext: Maybe<Scalars['Wysiwyg']>;
  id: Maybe<Scalars['String']>;
  tags: Maybe<Scalars['Json']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type FinchSitePageBlockQuery = {
  __typename?: 'FinchSitePageBlockQuery';
  get: Maybe<FinchSitePageBlockOut>;
  list: Maybe<FinchSitePageBlockList>;
};

export type FinchSitePageBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type FinchSitePageBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FinchSitePageIn = {
  article: InputMaybe<Scalars['Boolean']>;
  black: InputMaybe<Scalars['Boolean']>;
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  lead: InputMaybe<Scalars['Json']>;
  title: InputMaybe<Scalars['String']>;
  urn: InputMaybe<Scalars['String']>;
};

export type FinchSitePageList = {
  __typename?: 'FinchSitePageList';
  documents: Maybe<Array<Maybe<FinchSitePageOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FinchSitePageMutation = {
  __typename?: 'FinchSitePageMutation';
  create: Maybe<FinchSitePageOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FinchSitePageOut>;
};

export type FinchSitePageMutationCreateArgs = {
  data: FinchSitePageIn;
};

export type FinchSitePageMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FinchSitePageMutationUpdateArgs = {
  data: FinchSitePageIn;
  id: Scalars['String'];
};

export type FinchSitePageOut = {
  __typename?: 'FinchSitePageOut';
  article: Maybe<Scalars['Boolean']>;
  black: Maybe<Scalars['Boolean']>;
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  lead: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['String']>;
  urn: Maybe<Scalars['String']>;
};

export type FinchSitePageQuery = {
  __typename?: 'FinchSitePageQuery';
  get: Maybe<FinchSitePageOut>;
  list: Maybe<FinchSitePageList>;
};

export type FinchSitePageQueryGetArgs = {
  id: Scalars['String'];
};

export type FinchSitePageQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FinchWebPageIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
};

export type FinchWebPageList = {
  __typename?: 'FinchWebPageList';
  documents: Maybe<Array<Maybe<FinchWebPageOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FinchWebPageMutation = {
  __typename?: 'FinchWebPageMutation';
  create: Maybe<FinchWebPageOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FinchWebPageOut>;
};

export type FinchWebPageMutationCreateArgs = {
  data: FinchWebPageIn;
};

export type FinchWebPageMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FinchWebPageMutationUpdateArgs = {
  data: FinchWebPageIn;
  id: Scalars['String'];
};

export type FinchWebPageOut = {
  __typename?: 'FinchWebPageOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
};

export type FinchWebPageQuery = {
  __typename?: 'FinchWebPageQuery';
  get: Maybe<FinchWebPageOut>;
  list: Maybe<FinchWebPageList>;
};

export type FinchWebPageQueryGetArgs = {
  id: Scalars['String'];
};

export type FinchWebPageQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Form = {
  __typename?: 'Form';
  dictionary: Maybe<Scalars['Map_String_Map_Scalar']>;
  document: Maybe<Document>;
};

export type FormBlockIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  fields: InputMaybe<Scalars['Json']>;
  id: InputMaybe<Scalars['String']>;
  label: InputMaybe<Scalars['String']>;
};

export type FormBlockList = {
  __typename?: 'FormBlockList';
  documents: Maybe<Array<Maybe<FormBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FormBlockMutation = {
  __typename?: 'FormBlockMutation';
  create: Maybe<FormBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FormBlockOut>;
};

export type FormBlockMutationCreateArgs = {
  data: FormBlockIn;
};

export type FormBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FormBlockMutationUpdateArgs = {
  data: FormBlockIn;
  id: Scalars['String'];
};

export type FormBlockOut = {
  __typename?: 'FormBlockOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  fields: Maybe<Scalars['Json']>;
  id: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
};

export type FormBlockQuery = {
  __typename?: 'FormBlockQuery';
  get: Maybe<FormBlockOut>;
  list: Maybe<FormBlockList>;
};

export type FormBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type FormBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FormIn = {
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type FormList = {
  __typename?: 'FormList';
  documents: Maybe<Array<Maybe<FormOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FormMutation = {
  __typename?: 'FormMutation';
  create: Maybe<FormOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FormOut>;
};

export type FormMutationCreateArgs = {
  data: FormIn;
};

export type FormMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FormMutationUpdateArgs = {
  data: FormIn;
  id: Scalars['String'];
};

export type FormOut = {
  __typename?: 'FormOut';
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type FormQuery = {
  __typename?: 'FormQuery';
  get: Maybe<FormOut>;
  list: Maybe<FormList>;
};

export type FormQueryGetArgs = {
  id: Scalars['String'];
};

export type FormQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type FormResultIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  counter: InputMaybe<Scalars['Int']>;
  data: InputMaybe<Scalars['Json']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type FormResultList = {
  __typename?: 'FormResultList';
  documents: Maybe<Array<Maybe<FormResultOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type FormResultMutation = {
  __typename?: 'FormResultMutation';
  create: Maybe<FormResultOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<FormResultOut>;
};

export type FormResultMutationCreateArgs = {
  data: FormResultIn;
};

export type FormResultMutationDeleteArgs = {
  id: Scalars['String'];
};

export type FormResultMutationUpdateArgs = {
  data: FormResultIn;
  id: Scalars['String'];
};

export type FormResultOut = {
  __typename?: 'FormResultOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  counter: Maybe<Scalars['Int']>;
  data: Maybe<Scalars['Json']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type FormResultQuery = {
  __typename?: 'FormResultQuery';
  get: Maybe<FormResultOut>;
  list: Maybe<FormResultList>;
};

export type FormResultQueryGetArgs = {
  id: Scalars['String'];
};

export type FormResultQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type HeroIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type HeroList = {
  __typename?: 'HeroList';
  documents: Maybe<Array<Maybe<HeroOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type HeroMutation = {
  __typename?: 'HeroMutation';
  create: Maybe<HeroOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<HeroOut>;
};

export type HeroMutationCreateArgs = {
  data: HeroIn;
};

export type HeroMutationDeleteArgs = {
  id: Scalars['String'];
};

export type HeroMutationUpdateArgs = {
  data: HeroIn;
  id: Scalars['String'];
};

export type HeroOut = {
  __typename?: 'HeroOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type HeroQuery = {
  __typename?: 'HeroQuery';
  get: Maybe<HeroOut>;
  list: Maybe<HeroList>;
};

export type HeroQueryGetArgs = {
  id: Scalars['String'];
};

export type HeroQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type History = {
  __typename?: 'History';
  entityId: Maybe<Scalars['String']>;
  entityName: Maybe<Scalars['String']>;
  entries: Maybe<Array<Maybe<HistoryEntry>>>;
};

export type HistoryEntry = {
  __typename?: 'HistoryEntry';
  data: Maybe<Scalars['Json']>;
  date: Maybe<Scalars['DateTime']>;
  entityId: Maybe<Scalars['String']>;
  entityName: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Long']>;
  model: Maybe<Scalars['Json']>;
  operationType: Maybe<TransactionOutboxOperationType>;
  user: Maybe<HistoryEntryAuthor>;
  version: Maybe<Scalars['Int']>;
};

export type HistoryEntryAuthor = {
  __typename?: 'HistoryEntryAuthor';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type InputFilter = {
  field: InputMaybe<Scalars['String']>;
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  operator: InputMaybe<FilterOperator>;
  value: InputMaybe<Scalars['Json']>;
};

export type InputOrder = {
  direction: InputMaybe<Direction>;
  field: InputMaybe<Scalars['String']>;
};

export type InterviewIn = {
  button: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  links: InputMaybe<Scalars['Json']>;
  signUpButton: InputMaybe<Scalars['Json']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type InterviewList = {
  __typename?: 'InterviewList';
  documents: Maybe<Array<Maybe<InterviewOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type InterviewMutation = {
  __typename?: 'InterviewMutation';
  create: Maybe<InterviewOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<InterviewOut>;
};

export type InterviewMutationCreateArgs = {
  data: InterviewIn;
};

export type InterviewMutationDeleteArgs = {
  id: Scalars['String'];
};

export type InterviewMutationUpdateArgs = {
  data: InterviewIn;
  id: Scalars['String'];
};

export type InterviewOut = {
  __typename?: 'InterviewOut';
  button: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  links: Maybe<Scalars['Json']>;
  signUpButton: Maybe<Scalars['Json']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type InterviewQuery = {
  __typename?: 'InterviewQuery';
  get: Maybe<InterviewOut>;
  list: Maybe<InterviewList>;
};

export type InterviewQueryGetArgs = {
  id: Scalars['String'];
};

export type InterviewQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type LandingIn = {
  blocks: InputMaybe<Scalars['Json']>;
  bodyscripts: InputMaybe<Scalars['Text']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['Text']>;
  headscripts: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  leadgen: InputMaybe<Scalars['Json']>;
  themecolor: InputMaybe<Scalars['Color']>;
  title: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type LandingList = {
  __typename?: 'LandingList';
  documents: Maybe<Array<Maybe<LandingOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type LandingMutation = {
  __typename?: 'LandingMutation';
  create: Maybe<LandingOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<LandingOut>;
};

export type LandingMutationCreateArgs = {
  data: LandingIn;
};

export type LandingMutationDeleteArgs = {
  id: Scalars['String'];
};

export type LandingMutationUpdateArgs = {
  data: LandingIn;
  id: Scalars['String'];
};

export type LandingOut = {
  __typename?: 'LandingOut';
  blocks: Maybe<Scalars['Json']>;
  bodyscripts: Maybe<Scalars['Text']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['Text']>;
  headscripts: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  leadgen: Maybe<Scalars['Json']>;
  themecolor: Maybe<Scalars['Color']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type LandingQuery = {
  __typename?: 'LandingQuery';
  get: Maybe<LandingOut>;
  list: Maybe<LandingList>;
};

export type LandingQueryGetArgs = {
  id: Scalars['String'];
};

export type LandingQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type LinkIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type LinkList = {
  __typename?: 'LinkList';
  documents: Maybe<Array<Maybe<LinkOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type LinkMutation = {
  __typename?: 'LinkMutation';
  create: Maybe<LinkOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<LinkOut>;
};

export type LinkMutationCreateArgs = {
  data: LinkIn;
};

export type LinkMutationDeleteArgs = {
  id: Scalars['String'];
};

export type LinkMutationUpdateArgs = {
  data: LinkIn;
  id: Scalars['String'];
};

export type LinkOut = {
  __typename?: 'LinkOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type LinkQuery = {
  __typename?: 'LinkQuery';
  get: Maybe<LinkOut>;
  list: Maybe<LinkList>;
};

export type LinkQueryGetArgs = {
  id: Scalars['String'];
};

export type LinkQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MaterialBlockIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  title: InputMaybe<Scalars['String']>;
};

export type MaterialBlockList = {
  __typename?: 'MaterialBlockList';
  documents: Maybe<Array<Maybe<MaterialBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type MaterialBlockMutation = {
  __typename?: 'MaterialBlockMutation';
  create: Maybe<MaterialBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<MaterialBlockOut>;
};

export type MaterialBlockMutationCreateArgs = {
  data: MaterialBlockIn;
};

export type MaterialBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type MaterialBlockMutationUpdateArgs = {
  data: MaterialBlockIn;
  id: Scalars['String'];
};

export type MaterialBlockOut = {
  __typename?: 'MaterialBlockOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  title: Maybe<Scalars['String']>;
};

export type MaterialBlockQuery = {
  __typename?: 'MaterialBlockQuery';
  get: Maybe<MaterialBlockOut>;
  list: Maybe<MaterialBlockList>;
};

export type MaterialBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type MaterialBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MenuIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  code: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
  photos: InputMaybe<Scalars['Gallery']>;
  title: InputMaybe<Scalars['String']>;
};

export type MenuItemIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  href: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  visible: InputMaybe<Scalars['Boolean']>;
};

export type MenuItemList = {
  __typename?: 'MenuItemList';
  documents: Maybe<Array<Maybe<MenuItemOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuItemMutation = {
  __typename?: 'MenuItemMutation';
  create: Maybe<MenuItemOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<MenuItemOut>;
};

export type MenuItemMutationCreateArgs = {
  data: MenuItemIn;
};

export type MenuItemMutationDeleteArgs = {
  id: Scalars['String'];
};

export type MenuItemMutationUpdateArgs = {
  data: MenuItemIn;
  id: Scalars['String'];
};

export type MenuItemOut = {
  __typename?: 'MenuItemOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  href: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  visible: Maybe<Scalars['Boolean']>;
};

export type MenuItemQuery = {
  __typename?: 'MenuItemQuery';
  get: Maybe<MenuItemOut>;
  list: Maybe<MenuItemList>;
};

export type MenuItemQueryGetArgs = {
  id: Scalars['String'];
};

export type MenuItemQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type MenuList = {
  __typename?: 'MenuList';
  documents: Maybe<Array<Maybe<MenuOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type MenuMutation = {
  __typename?: 'MenuMutation';
  create: Maybe<MenuOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<MenuOut>;
};

export type MenuMutationCreateArgs = {
  data: MenuIn;
};

export type MenuMutationDeleteArgs = {
  id: Scalars['String'];
};

export type MenuMutationUpdateArgs = {
  data: MenuIn;
  id: Scalars['String'];
};

export type MenuOut = {
  __typename?: 'MenuOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  code: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
  photos: Maybe<Scalars['Gallery']>;
  title: Maybe<Scalars['String']>;
};

export type MenuQuery = {
  __typename?: 'MenuQuery';
  get: Maybe<MenuOut>;
  list: Maybe<MenuList>;
};

export type MenuQueryGetArgs = {
  id: Scalars['String'];
};

export type MenuQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Meta = {
  __typename?: 'Meta';
  components: Maybe<Scalars['Map_String_EntityDescriptor_Scalar']>;
  entities: Maybe<Array<Maybe<EntityDescriptor>>>;
  handbooks: Maybe<Scalars['Map_String_List_Scalar']>;
};

export type MetaIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  custom: InputMaybe<Scalars['Wysiwyg']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  title: InputMaybe<Scalars['String']>;
};

export type MetaList = {
  __typename?: 'MetaList';
  documents: Maybe<Array<Maybe<MetaOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type MetaMutation = {
  __typename?: 'MetaMutation';
  create: Maybe<MetaOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<MetaOut>;
};

export type MetaMutationCreateArgs = {
  data: MetaIn;
};

export type MetaMutationDeleteArgs = {
  id: Scalars['String'];
};

export type MetaMutationUpdateArgs = {
  data: MetaIn;
  id: Scalars['String'];
};

export type MetaOut = {
  __typename?: 'MetaOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  custom: Maybe<Scalars['Wysiwyg']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  title: Maybe<Scalars['String']>;
};

export type MetaQuery = {
  __typename?: 'MetaQuery';
  get: Maybe<MetaOut>;
  list: Maybe<MetaList>;
};

export type MetaQueryGetArgs = {
  id: Scalars['String'];
};

export type MetaQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ModelAction = {
  __typename?: 'ModelAction';
  name: Maybe<Scalars['String']>;
  type: Maybe<ActionType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  BlockMutation: Maybe<BlockMutation>;
  BoxesBlockItemMutation: Maybe<BoxesBlockItemMutation>;
  BoxesBlockMutation: Maybe<BoxesBlockMutation>;
  ButtonMutation: Maybe<ButtonMutation>;
  ClientMutation: Maybe<ClientMutation>;
  ClientsBlockMutation: Maybe<ClientsBlockMutation>;
  ClientsMutation: Maybe<ClientsMutation>;
  DirectionMutation: Maybe<DirectionMutation>;
  DirectionsMutation: Maybe<DirectionsMutation>;
  FinchSiteGalleryItemMutation: Maybe<FinchSiteGalleryItemMutation>;
  FinchSitePageBlockMutation: Maybe<FinchSitePageBlockMutation>;
  FinchSitePageMutation: Maybe<FinchSitePageMutation>;
  FinchWebPageMutation: Maybe<FinchWebPageMutation>;
  FormBlockMutation: Maybe<FormBlockMutation>;
  FormMutation: Maybe<FormMutation>;
  FormResultMutation: Maybe<FormResultMutation>;
  HeroMutation: Maybe<HeroMutation>;
  InterviewMutation: Maybe<InterviewMutation>;
  LandingMutation: Maybe<LandingMutation>;
  LinkMutation: Maybe<LinkMutation>;
  MaterialBlockMutation: Maybe<MaterialBlockMutation>;
  MenuItemMutation: Maybe<MenuItemMutation>;
  MenuMutation: Maybe<MenuMutation>;
  MetaMutation: Maybe<MetaMutation>;
  NewYearMutation: Maybe<NewYearMutation>;
  PageMutation: Maybe<PageMutation>;
  ProjectMutation: Maybe<ProjectMutation>;
  ProjectsMutation: Maybe<ProjectsMutation>;
  PromoMutation: Maybe<PromoMutation>;
  RoadMapMutation: Maybe<RoadMapMutation>;
  RoadMapPointMutation: Maybe<RoadMapPointMutation>;
  RoleMutation: Maybe<RoleMutation>;
  ServiceMutation: Maybe<ServiceMutation>;
  ServicePointMutation: Maybe<ServicePointMutation>;
  Services2Mutation: Maybe<Services2Mutation>;
  ServicesMutation: Maybe<ServicesMutation>;
  TagMutation: Maybe<TagMutation>;
  TagsBlockMutation: Maybe<TagsBlockMutation>;
  TagsMutation: Maybe<TagsMutation>;
  TargetMutation: Maybe<TargetMutation>;
  TargetsMutation: Maybe<TargetsMutation>;
  TeamBlockMutation: Maybe<TeamBlockMutation>;
  TeamMemberMutation: Maybe<TeamMemberMutation>;
  TeamMutation: Maybe<TeamMutation>;
  ThemeMutation: Maybe<ThemeMutation>;
  TovarMutation: Maybe<TovarMutation>;
  TovarRuleMutation: Maybe<TovarRuleMutation>;
  UserMutation: Maybe<UserMutation>;
  WebConfigMutation: Maybe<WebConfigMutation>;
  create: Maybe<SaveResult>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<SaveResult>;
};

export type MutationCreateArgs = {
  data: InputMaybe<Scalars['Json']>;
  force: InputMaybe<Scalars['Boolean']>;
  type: InputMaybe<Scalars['String']>;
};

export type MutationDeleteArgs = {
  id: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type MutationUpdateArgs = {
  data: InputMaybe<Scalars['Json']>;
  force: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type NewYearIn = {
  button: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
  url: InputMaybe<Scalars['String']>;
};

export type NewYearList = {
  __typename?: 'NewYearList';
  documents: Maybe<Array<Maybe<NewYearOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type NewYearMutation = {
  __typename?: 'NewYearMutation';
  create: Maybe<NewYearOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<NewYearOut>;
};

export type NewYearMutationCreateArgs = {
  data: NewYearIn;
};

export type NewYearMutationDeleteArgs = {
  id: Scalars['String'];
};

export type NewYearMutationUpdateArgs = {
  data: NewYearIn;
  id: Scalars['String'];
};

export type NewYearOut = {
  __typename?: 'NewYearOut';
  button: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type NewYearQuery = {
  __typename?: 'NewYearQuery';
  get: Maybe<NewYearOut>;
  list: Maybe<NewYearList>;
};

export type NewYearQueryGetArgs = {
  id: Scalars['String'];
};

export type NewYearQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export enum OperationType {
  Autocomplete = 'AUTOCOMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Table = 'TABLE',
  Update = 'UPDATE',
}

export type PageIn = {
  bodyScripts: InputMaybe<Scalars['Text']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  email: InputMaybe<Scalars['String']>;
  gradientColor: InputMaybe<Scalars['String']>;
  headScripts: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  items: InputMaybe<Scalars['Json']>;
  leadgen: InputMaybe<Scalars['Json']>;
  meta: InputMaybe<Scalars['Json']>;
  navLinks: InputMaybe<Scalars['Json']>;
  social: InputMaybe<Scalars['Json']>;
  theme: InputMaybe<Scalars['Json']>;
  themeColor: InputMaybe<Scalars['Color']>;
  title: InputMaybe<Scalars['String']>;
  urn: InputMaybe<Scalars['String']>;
};

export type PageList = {
  __typename?: 'PageList';
  documents: Maybe<Array<Maybe<PageOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type PageMutation = {
  __typename?: 'PageMutation';
  create: Maybe<PageOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<PageOut>;
};

export type PageMutationCreateArgs = {
  data: PageIn;
};

export type PageMutationDeleteArgs = {
  id: Scalars['String'];
};

export type PageMutationUpdateArgs = {
  data: PageIn;
  id: Scalars['String'];
};

export type PageOut = {
  __typename?: 'PageOut';
  bodyScripts: Maybe<Scalars['Text']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  gradientColor: Maybe<Scalars['String']>;
  headScripts: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  items: Maybe<Scalars['Json']>;
  leadgen: Maybe<Scalars['Json']>;
  meta: Maybe<Scalars['Json']>;
  navLinks: Maybe<Scalars['Json']>;
  social: Maybe<Scalars['Json']>;
  theme: Maybe<Scalars['Json']>;
  themeColor: Maybe<Scalars['Color']>;
  title: Maybe<Scalars['String']>;
  urn: Maybe<Scalars['String']>;
};

export type PageQuery = {
  __typename?: 'PageQuery';
  get: Maybe<PageOut>;
  list: Maybe<PageList>;
};

export type PageQueryGetArgs = {
  id: Scalars['String'];
};

export type PageQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ProjectIn = {
  androidLink: InputMaybe<Scalars['String']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  iosLink: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type ProjectList = {
  __typename?: 'ProjectList';
  documents: Maybe<Array<Maybe<ProjectOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ProjectMutation = {
  __typename?: 'ProjectMutation';
  create: Maybe<ProjectOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ProjectOut>;
};

export type ProjectMutationCreateArgs = {
  data: ProjectIn;
};

export type ProjectMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ProjectMutationUpdateArgs = {
  data: ProjectIn;
  id: Scalars['String'];
};

export type ProjectOut = {
  __typename?: 'ProjectOut';
  androidLink: Maybe<Scalars['String']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  iosLink: Maybe<Scalars['String']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type ProjectQuery = {
  __typename?: 'ProjectQuery';
  get: Maybe<ProjectOut>;
  list: Maybe<ProjectList>;
};

export type ProjectQueryGetArgs = {
  id: Scalars['String'];
};

export type ProjectQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ProjectsIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type ProjectsList = {
  __typename?: 'ProjectsList';
  documents: Maybe<Array<Maybe<ProjectsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ProjectsMutation = {
  __typename?: 'ProjectsMutation';
  create: Maybe<ProjectsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ProjectsOut>;
};

export type ProjectsMutationCreateArgs = {
  data: ProjectsIn;
};

export type ProjectsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ProjectsMutationUpdateArgs = {
  data: ProjectsIn;
  id: Scalars['String'];
};

export type ProjectsOut = {
  __typename?: 'ProjectsOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type ProjectsQuery = {
  __typename?: 'ProjectsQuery';
  get: Maybe<ProjectsOut>;
  list: Maybe<ProjectsList>;
};

export type ProjectsQueryGetArgs = {
  id: Scalars['String'];
};

export type ProjectsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type PromoIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  text: InputMaybe<Scalars['String']>;
};

export type PromoList = {
  __typename?: 'PromoList';
  documents: Maybe<Array<Maybe<PromoOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type PromoMutation = {
  __typename?: 'PromoMutation';
  create: Maybe<PromoOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<PromoOut>;
};

export type PromoMutationCreateArgs = {
  data: PromoIn;
};

export type PromoMutationDeleteArgs = {
  id: Scalars['String'];
};

export type PromoMutationUpdateArgs = {
  data: PromoIn;
  id: Scalars['String'];
};

export type PromoOut = {
  __typename?: 'PromoOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  text: Maybe<Scalars['String']>;
};

export type PromoQuery = {
  __typename?: 'PromoQuery';
  get: Maybe<PromoOut>;
  list: Maybe<PromoList>;
};

export type PromoQueryGetArgs = {
  id: Scalars['String'];
};

export type PromoQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  BlockQuery: Maybe<BlockQuery>;
  BoxesBlockItemQuery: Maybe<BoxesBlockItemQuery>;
  BoxesBlockQuery: Maybe<BoxesBlockQuery>;
  ButtonQuery: Maybe<ButtonQuery>;
  ClientQuery: Maybe<ClientQuery>;
  ClientsBlockQuery: Maybe<ClientsBlockQuery>;
  ClientsQuery: Maybe<ClientsQuery>;
  DirectionQuery: Maybe<DirectionQuery>;
  DirectionsQuery: Maybe<DirectionsQuery>;
  FinchSiteGalleryItemQuery: Maybe<FinchSiteGalleryItemQuery>;
  FinchSitePageBlockQuery: Maybe<FinchSitePageBlockQuery>;
  FinchSitePageQuery: Maybe<FinchSitePageQuery>;
  FinchWebPageQuery: Maybe<FinchWebPageQuery>;
  FormBlockQuery: Maybe<FormBlockQuery>;
  FormQuery: Maybe<FormQuery>;
  FormResultQuery: Maybe<FormResultQuery>;
  HeroQuery: Maybe<HeroQuery>;
  InterviewQuery: Maybe<InterviewQuery>;
  LandingQuery: Maybe<LandingQuery>;
  LinkQuery: Maybe<LinkQuery>;
  MaterialBlockQuery: Maybe<MaterialBlockQuery>;
  MenuItemQuery: Maybe<MenuItemQuery>;
  MenuQuery: Maybe<MenuQuery>;
  MetaQuery: Maybe<MetaQuery>;
  NewYearQuery: Maybe<NewYearQuery>;
  PageQuery: Maybe<PageQuery>;
  ProjectQuery: Maybe<ProjectQuery>;
  ProjectsQuery: Maybe<ProjectsQuery>;
  PromoQuery: Maybe<PromoQuery>;
  RoadMapPointQuery: Maybe<RoadMapPointQuery>;
  RoadMapQuery: Maybe<RoadMapQuery>;
  RoleQuery: Maybe<RoleQuery>;
  ServicePointQuery: Maybe<ServicePointQuery>;
  ServiceQuery: Maybe<ServiceQuery>;
  Services2Query: Maybe<Services2Query>;
  ServicesQuery: Maybe<ServicesQuery>;
  TagQuery: Maybe<TagQuery>;
  TagsBlockQuery: Maybe<TagsBlockQuery>;
  TagsQuery: Maybe<TagsQuery>;
  TargetQuery: Maybe<TargetQuery>;
  TargetsQuery: Maybe<TargetsQuery>;
  TeamBlockQuery: Maybe<TeamBlockQuery>;
  TeamMemberQuery: Maybe<TeamMemberQuery>;
  TeamQuery: Maybe<TeamQuery>;
  ThemeQuery: Maybe<ThemeQuery>;
  TovarQuery: Maybe<TovarQuery>;
  TovarRuleQuery: Maybe<TovarRuleQuery>;
  UserQuery: Maybe<UserQuery>;
  WebConfigQuery: Maybe<WebConfigQuery>;
  get: Maybe<Form>;
  history: Maybe<History>;
  historyEntry: Maybe<HistoryEntry>;
  meta: Maybe<Meta>;
  scriptSuggestions: Maybe<Scalars['Json']>;
  search: Maybe<SortedSearch>;
  simpleAuth: Maybe<Scalars['String']>;
  table: Maybe<Table>;
};

export type QueryGetArgs = {
  id: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type QueryHistoryArgs = {
  entityId: InputMaybe<Scalars['String']>;
  entityName: InputMaybe<Scalars['String']>;
};

export type QueryHistoryEntryArgs = {
  id: InputMaybe<Scalars['String']>;
};

export type QueryMetaArgs = {
  type: InputMaybe<Scalars['String']>;
};

export type QueryScriptSuggestionsArgs = {
  fields: InputMaybe<Array<InputMaybe<Scalars['Json']>>>;
  operation: InputMaybe<OperationType>;
};

export type QuerySearchArgs = {
  after: InputMaybe<Scalars['String']>;
  entityName: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
};

export type QuerySimpleAuthArgs = {
  password: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
};

export type QueryTableArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  type: InputMaybe<Scalars['String']>;
};

export type RefWithTitle = {
  __typename?: 'RefWithTitle';
  title: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type RoadMapIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type RoadMapList = {
  __typename?: 'RoadMapList';
  documents: Maybe<Array<Maybe<RoadMapOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type RoadMapMutation = {
  __typename?: 'RoadMapMutation';
  create: Maybe<RoadMapOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<RoadMapOut>;
};

export type RoadMapMutationCreateArgs = {
  data: RoadMapIn;
};

export type RoadMapMutationDeleteArgs = {
  id: Scalars['String'];
};

export type RoadMapMutationUpdateArgs = {
  data: RoadMapIn;
  id: Scalars['String'];
};

export type RoadMapOut = {
  __typename?: 'RoadMapOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type RoadMapPointIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type RoadMapPointList = {
  __typename?: 'RoadMapPointList';
  documents: Maybe<Array<Maybe<RoadMapPointOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type RoadMapPointMutation = {
  __typename?: 'RoadMapPointMutation';
  create: Maybe<RoadMapPointOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<RoadMapPointOut>;
};

export type RoadMapPointMutationCreateArgs = {
  data: RoadMapPointIn;
};

export type RoadMapPointMutationDeleteArgs = {
  id: Scalars['String'];
};

export type RoadMapPointMutationUpdateArgs = {
  data: RoadMapPointIn;
  id: Scalars['String'];
};

export type RoadMapPointOut = {
  __typename?: 'RoadMapPointOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type RoadMapPointQuery = {
  __typename?: 'RoadMapPointQuery';
  get: Maybe<RoadMapPointOut>;
  list: Maybe<RoadMapPointList>;
};

export type RoadMapPointQueryGetArgs = {
  id: Scalars['String'];
};

export type RoadMapPointQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type RoadMapQuery = {
  __typename?: 'RoadMapQuery';
  get: Maybe<RoadMapOut>;
  list: Maybe<RoadMapList>;
};

export type RoadMapQueryGetArgs = {
  id: Scalars['String'];
};

export type RoadMapQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type RoleIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type RoleList = {
  __typename?: 'RoleList';
  documents: Maybe<Array<Maybe<RoleOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type RoleMutation = {
  __typename?: 'RoleMutation';
  create: Maybe<RoleOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<RoleOut>;
};

export type RoleMutationCreateArgs = {
  data: RoleIn;
};

export type RoleMutationDeleteArgs = {
  id: Scalars['String'];
};

export type RoleMutationUpdateArgs = {
  data: RoleIn;
  id: Scalars['String'];
};

export type RoleOut = {
  __typename?: 'RoleOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type RoleQuery = {
  __typename?: 'RoleQuery';
  get: Maybe<RoleOut>;
  list: Maybe<RoleList>;
};

export type RoleQueryGetArgs = {
  id: Scalars['String'];
};

export type RoleQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SaveResult = {
  __typename?: 'SaveResult';
  document: Maybe<Document>;
  errors: Maybe<Array<Maybe<FieldValidationError>>>;
};

export type SecurityRule = {
  __typename?: 'SecurityRule';
  operation: Maybe<OperationType>;
  roles: Maybe<Array<Maybe<RefWithTitle>>>;
};

export type ServiceIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
  title: InputMaybe<Scalars['String']>;
};

export type ServiceList = {
  __typename?: 'ServiceList';
  documents: Maybe<Array<Maybe<ServiceOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ServiceMutation = {
  __typename?: 'ServiceMutation';
  create: Maybe<ServiceOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ServiceOut>;
};

export type ServiceMutationCreateArgs = {
  data: ServiceIn;
};

export type ServiceMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ServiceMutationUpdateArgs = {
  data: ServiceIn;
  id: Scalars['String'];
};

export type ServiceOut = {
  __typename?: 'ServiceOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['String']>;
};

export type ServicePointIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type ServicePointList = {
  __typename?: 'ServicePointList';
  documents: Maybe<Array<Maybe<ServicePointOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ServicePointMutation = {
  __typename?: 'ServicePointMutation';
  create: Maybe<ServicePointOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ServicePointOut>;
};

export type ServicePointMutationCreateArgs = {
  data: ServicePointIn;
};

export type ServicePointMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ServicePointMutationUpdateArgs = {
  data: ServicePointIn;
  id: Scalars['String'];
};

export type ServicePointOut = {
  __typename?: 'ServicePointOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type ServicePointQuery = {
  __typename?: 'ServicePointQuery';
  get: Maybe<ServicePointOut>;
  list: Maybe<ServicePointList>;
};

export type ServicePointQueryGetArgs = {
  id: Scalars['String'];
};

export type ServicePointQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ServiceQuery = {
  __typename?: 'ServiceQuery';
  get: Maybe<ServiceOut>;
  list: Maybe<ServiceList>;
};

export type ServiceQueryGetArgs = {
  id: Scalars['String'];
};

export type ServiceQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type Services2In = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type Services2List = {
  __typename?: 'Services2List';
  documents: Maybe<Array<Maybe<Services2Out>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type Services2Mutation = {
  __typename?: 'Services2Mutation';
  create: Maybe<Services2Out>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<Services2Out>;
};

export type Services2MutationCreateArgs = {
  data: Services2In;
};

export type Services2MutationDeleteArgs = {
  id: Scalars['String'];
};

export type Services2MutationUpdateArgs = {
  data: Services2In;
  id: Scalars['String'];
};

export type Services2Out = {
  __typename?: 'Services2Out';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type Services2Query = {
  __typename?: 'Services2Query';
  get: Maybe<Services2Out>;
  list: Maybe<Services2List>;
};

export type Services2QueryGetArgs = {
  id: Scalars['String'];
};

export type Services2QueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ServicesIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type ServicesList = {
  __typename?: 'ServicesList';
  documents: Maybe<Array<Maybe<ServicesOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ServicesMutation = {
  __typename?: 'ServicesMutation';
  create: Maybe<ServicesOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ServicesOut>;
};

export type ServicesMutationCreateArgs = {
  data: ServicesIn;
};

export type ServicesMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ServicesMutationUpdateArgs = {
  data: ServicesIn;
  id: Scalars['String'];
};

export type ServicesOut = {
  __typename?: 'ServicesOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type ServicesQuery = {
  __typename?: 'ServicesQuery';
  get: Maybe<ServicesOut>;
  list: Maybe<ServicesList>;
};

export type ServicesQueryGetArgs = {
  id: Scalars['String'];
};

export type ServicesQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SortedSearch = {
  __typename?: 'SortedSearch';
  documents: Maybe<Array<Maybe<Scalars['Json']>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  scroll: Maybe<Scalars['String']>;
};

export type Table = {
  __typename?: 'Table';
  documents: Maybe<Array<Maybe<Document>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Long']>;
};

export type TagIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type TagList = {
  __typename?: 'TagList';
  documents: Maybe<Array<Maybe<TagOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TagMutation = {
  __typename?: 'TagMutation';
  create: Maybe<TagOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TagOut>;
};

export type TagMutationCreateArgs = {
  data: TagIn;
};

export type TagMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TagMutationUpdateArgs = {
  data: TagIn;
  id: Scalars['String'];
};

export type TagOut = {
  __typename?: 'TagOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type TagQuery = {
  __typename?: 'TagQuery';
  get: Maybe<TagOut>;
  list: Maybe<TagList>;
};

export type TagQueryGetArgs = {
  id: Scalars['String'];
};

export type TagQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TagsBlockIn = {
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type TagsBlockList = {
  __typename?: 'TagsBlockList';
  documents: Maybe<Array<Maybe<TagsBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TagsBlockMutation = {
  __typename?: 'TagsBlockMutation';
  create: Maybe<TagsBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TagsBlockOut>;
};

export type TagsBlockMutationCreateArgs = {
  data: TagsBlockIn;
};

export type TagsBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TagsBlockMutationUpdateArgs = {
  data: TagsBlockIn;
  id: Scalars['String'];
};

export type TagsBlockOut = {
  __typename?: 'TagsBlockOut';
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type TagsBlockQuery = {
  __typename?: 'TagsBlockQuery';
  get: Maybe<TagsBlockOut>;
  list: Maybe<TagsBlockList>;
};

export type TagsBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type TagsBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TagsIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type TagsList = {
  __typename?: 'TagsList';
  documents: Maybe<Array<Maybe<TagsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TagsMutation = {
  __typename?: 'TagsMutation';
  create: Maybe<TagsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TagsOut>;
};

export type TagsMutationCreateArgs = {
  data: TagsIn;
};

export type TagsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TagsMutationUpdateArgs = {
  data: TagsIn;
  id: Scalars['String'];
};

export type TagsOut = {
  __typename?: 'TagsOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type TagsQuery = {
  __typename?: 'TagsQuery';
  get: Maybe<TagsOut>;
  list: Maybe<TagsList>;
};

export type TagsQueryGetArgs = {
  id: Scalars['String'];
};

export type TagsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TargetIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  text: InputMaybe<Scalars['Wysiwyg']>;
  title: InputMaybe<Scalars['String']>;
};

export type TargetList = {
  __typename?: 'TargetList';
  documents: Maybe<Array<Maybe<TargetOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TargetMutation = {
  __typename?: 'TargetMutation';
  create: Maybe<TargetOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TargetOut>;
};

export type TargetMutationCreateArgs = {
  data: TargetIn;
};

export type TargetMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TargetMutationUpdateArgs = {
  data: TargetIn;
  id: Scalars['String'];
};

export type TargetOut = {
  __typename?: 'TargetOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['Wysiwyg']>;
  title: Maybe<Scalars['String']>;
};

export type TargetQuery = {
  __typename?: 'TargetQuery';
  get: Maybe<TargetOut>;
  list: Maybe<TargetList>;
};

export type TargetQueryGetArgs = {
  id: Scalars['String'];
};

export type TargetQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TargetsIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  items: InputMaybe<Scalars['Json']>;
};

export type TargetsList = {
  __typename?: 'TargetsList';
  documents: Maybe<Array<Maybe<TargetsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TargetsMutation = {
  __typename?: 'TargetsMutation';
  create: Maybe<TargetsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TargetsOut>;
};

export type TargetsMutationCreateArgs = {
  data: TargetsIn;
};

export type TargetsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TargetsMutationUpdateArgs = {
  data: TargetsIn;
  id: Scalars['String'];
};

export type TargetsOut = {
  __typename?: 'TargetsOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
};

export type TargetsQuery = {
  __typename?: 'TargetsQuery';
  get: Maybe<TargetsOut>;
  list: Maybe<TargetsList>;
};

export type TargetsQueryGetArgs = {
  id: Scalars['String'];
};

export type TargetsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TeamBlockIn = {
  blocks: InputMaybe<Scalars['Json']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  description: InputMaybe<Scalars['Wysiwyg']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type TeamBlockList = {
  __typename?: 'TeamBlockList';
  documents: Maybe<Array<Maybe<TeamBlockOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TeamBlockMutation = {
  __typename?: 'TeamBlockMutation';
  create: Maybe<TeamBlockOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TeamBlockOut>;
};

export type TeamBlockMutationCreateArgs = {
  data: TeamBlockIn;
};

export type TeamBlockMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TeamBlockMutationUpdateArgs = {
  data: TeamBlockIn;
  id: Scalars['String'];
};

export type TeamBlockOut = {
  __typename?: 'TeamBlockOut';
  blocks: Maybe<Scalars['Json']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['Wysiwyg']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type TeamBlockQuery = {
  __typename?: 'TeamBlockQuery';
  get: Maybe<TeamBlockOut>;
  list: Maybe<TeamBlockList>;
};

export type TeamBlockQueryGetArgs = {
  id: Scalars['String'];
};

export type TeamBlockQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TeamIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  members: InputMaybe<Scalars['Json']>;
};

export type TeamList = {
  __typename?: 'TeamList';
  documents: Maybe<Array<Maybe<TeamOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TeamMemberIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  photo: InputMaybe<Scalars['Image']>;
  position: InputMaybe<Scalars['String']>;
};

export type TeamMemberList = {
  __typename?: 'TeamMemberList';
  documents: Maybe<Array<Maybe<TeamMemberOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TeamMemberMutation = {
  __typename?: 'TeamMemberMutation';
  create: Maybe<TeamMemberOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TeamMemberOut>;
};

export type TeamMemberMutationCreateArgs = {
  data: TeamMemberIn;
};

export type TeamMemberMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TeamMemberMutationUpdateArgs = {
  data: TeamMemberIn;
  id: Scalars['String'];
};

export type TeamMemberOut = {
  __typename?: 'TeamMemberOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  photo: Maybe<Scalars['Image']>;
  position: Maybe<Scalars['String']>;
};

export type TeamMemberQuery = {
  __typename?: 'TeamMemberQuery';
  get: Maybe<TeamMemberOut>;
  list: Maybe<TeamMemberList>;
};

export type TeamMemberQueryGetArgs = {
  id: Scalars['String'];
};

export type TeamMemberQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TeamMutation = {
  __typename?: 'TeamMutation';
  create: Maybe<TeamOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TeamOut>;
};

export type TeamMutationCreateArgs = {
  data: TeamIn;
};

export type TeamMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TeamMutationUpdateArgs = {
  data: TeamIn;
  id: Scalars['String'];
};

export type TeamOut = {
  __typename?: 'TeamOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  members: Maybe<Scalars['Json']>;
};

export type TeamQuery = {
  __typename?: 'TeamQuery';
  get: Maybe<TeamOut>;
  list: Maybe<TeamList>;
};

export type TeamQueryGetArgs = {
  id: Scalars['String'];
};

export type TeamQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ThemeIn = {
  adaptive: InputMaybe<Scalars['Boolean']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  dark: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
};

export type ThemeList = {
  __typename?: 'ThemeList';
  documents: Maybe<Array<Maybe<ThemeOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ThemeMutation = {
  __typename?: 'ThemeMutation';
  create: Maybe<ThemeOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ThemeOut>;
};

export type ThemeMutationCreateArgs = {
  data: ThemeIn;
};

export type ThemeMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ThemeMutationUpdateArgs = {
  data: ThemeIn;
  id: Scalars['String'];
};

export type ThemeOut = {
  __typename?: 'ThemeOut';
  adaptive: Maybe<Scalars['Boolean']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  dark: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
};

export type ThemeQuery = {
  __typename?: 'ThemeQuery';
  get: Maybe<ThemeOut>;
  list: Maybe<ThemeList>;
};

export type ThemeQueryGetArgs = {
  id: Scalars['String'];
};

export type ThemeQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TovarIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['String']>;
  rules: InputMaybe<Scalars['Json']>;
  title: InputMaybe<Scalars['String']>;
};

export type TovarList = {
  __typename?: 'TovarList';
  documents: Maybe<Array<Maybe<TovarOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TovarMutation = {
  __typename?: 'TovarMutation';
  create: Maybe<TovarOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TovarOut>;
};

export type TovarMutationCreateArgs = {
  data: TovarIn;
};

export type TovarMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TovarMutationUpdateArgs = {
  data: TovarIn;
  id: Scalars['String'];
};

export type TovarOut = {
  __typename?: 'TovarOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  rules: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['String']>;
};

export type TovarQuery = {
  __typename?: 'TovarQuery';
  get: Maybe<TovarOut>;
  list: Maybe<TovarList>;
};

export type TovarQueryGetArgs = {
  id: Scalars['String'];
};

export type TovarQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type TovarRuleIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  exceptions: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  phrase: InputMaybe<Scalars['String']>;
};

export type TovarRuleList = {
  __typename?: 'TovarRuleList';
  documents: Maybe<Array<Maybe<TovarRuleOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TovarRuleMutation = {
  __typename?: 'TovarRuleMutation';
  create: Maybe<TovarRuleOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TovarRuleOut>;
};

export type TovarRuleMutationCreateArgs = {
  data: TovarRuleIn;
};

export type TovarRuleMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TovarRuleMutationUpdateArgs = {
  data: TovarRuleIn;
  id: Scalars['String'];
};

export type TovarRuleOut = {
  __typename?: 'TovarRuleOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  exceptions: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  phrase: Maybe<Scalars['String']>;
};

export type TovarRuleQuery = {
  __typename?: 'TovarRuleQuery';
  get: Maybe<TovarRuleOut>;
  list: Maybe<TovarRuleList>;
};

export type TovarRuleQueryGetArgs = {
  id: Scalars['String'];
};

export type TovarRuleQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export enum TransactionOutboxOperationType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Save = 'SAVE',
}

export type UserIn = {
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  roles: InputMaybe<Scalars['Json']>;
  username: InputMaybe<Scalars['String']>;
};

export type UserList = {
  __typename?: 'UserList';
  documents: Maybe<Array<Maybe<UserOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  create: Maybe<UserOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<UserOut>;
};

export type UserMutationCreateArgs = {
  data: UserIn;
};

export type UserMutationDeleteArgs = {
  id: Scalars['String'];
};

export type UserMutationUpdateArgs = {
  data: UserIn;
  id: Scalars['String'];
};

export type UserOut = {
  __typename?: 'UserOut';
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  roles: Maybe<Scalars['Json']>;
  username: Maybe<Scalars['String']>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  get: Maybe<UserOut>;
  list: Maybe<UserList>;
  loginAuth: Maybe<Scalars['String']>;
};

export type UserQueryGetArgs = {
  id: Scalars['String'];
};

export type UserQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type UserQueryLoginAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type WebConfigIn = {
  bodyscript: InputMaybe<Scalars['Text']>;
  cmscreatedby: InputMaybe<Scalars['Json']>;
  cmscreationdate: InputMaybe<Scalars['DateTime']>;
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmspublished: InputMaybe<Scalars['Boolean']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  headscript: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  title: InputMaybe<Scalars['String']>;
};

export type WebConfigList = {
  __typename?: 'WebConfigList';
  documents: Maybe<Array<Maybe<WebConfigOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type WebConfigMutation = {
  __typename?: 'WebConfigMutation';
  create: Maybe<WebConfigOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<WebConfigOut>;
};

export type WebConfigMutationCreateArgs = {
  data: WebConfigIn;
};

export type WebConfigMutationDeleteArgs = {
  id: Scalars['String'];
};

export type WebConfigMutationUpdateArgs = {
  data: WebConfigIn;
  id: Scalars['String'];
};

export type WebConfigOut = {
  __typename?: 'WebConfigOut';
  bodyscript: Maybe<Scalars['Text']>;
  cmscreatedby: Maybe<Scalars['Json']>;
  cmscreationdate: Maybe<Scalars['DateTime']>;
  cmseditedby: Maybe<Scalars['Json']>;
  cmspublished: Maybe<Scalars['Boolean']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  headscript: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type WebConfigQuery = {
  __typename?: 'WebConfigQuery';
  get: Maybe<WebConfigOut>;
  list: Maybe<WebConfigList>;
};

export type WebConfigQueryGetArgs = {
  id: Scalars['String'];
};

export type WebConfigQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};
