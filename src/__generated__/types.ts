export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Image: string;
  Json: any;
  Long: any;
  Map_String_EntityDescriptor_Scalar: any;
  Map_String_List_Scalar: any;
  Map_String_Map_Scalar: any;
  Text: string;
  Void: any;
};

export enum ActionType {
  Mutation = 'MUTATION',
  Query = 'QUERY',
}

export enum BeforeOrAfterOperation {
  After = 'AFTER',
  Before = 'BEFORE',
}

export type ButtonElementsIn = {
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payload: InputMaybe<Scalars['Text']>;
  ttt: InputMaybe<Scalars['String']>;
};

export type ButtonElementsList = {
  __typename?: 'ButtonElementsList';
  documents: Maybe<Array<Maybe<ButtonElementsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ButtonElementsMutation = {
  __typename?: 'ButtonElementsMutation';
  create: Maybe<ButtonElementsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ButtonElementsOut>;
};

export type ButtonElementsMutationCreateArgs = {
  data: ButtonElementsIn;
};

export type ButtonElementsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ButtonElementsMutationUpdateArgs = {
  data: ButtonElementsIn;
  id: Scalars['String'];
};

export type ButtonElementsOut = {
  __typename?: 'ButtonElementsOut';
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  payload: Maybe<Scalars['Text']>;
  ttt: Maybe<Scalars['String']>;
};

export type ButtonElementsQuery = {
  __typename?: 'ButtonElementsQuery';
  get: Maybe<ButtonElementsOut>;
  list: Maybe<ButtonElementsList>;
};

export type ButtonElementsQueryGetArgs = {
  id: Scalars['String'];
};

export type ButtonElementsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC',
}

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

export enum EntityFieldPrimitiveType {
  Attachment = 'ATTACHMENT',
  Boolean = 'BOOLEAN',
  Color = 'COLOR',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Gallery = 'GALLERY',
  Gpoint = 'GPOINT',
  Image = 'IMAGE',
  Json = 'JSON',
  Number = 'NUMBER',
  Password = 'PASSWORD',
  String = 'STRING',
  SystemCreatedAt = 'SYSTEM_CREATED_AT',
  SystemCreatedBy = 'SYSTEM_CREATED_BY',
  SystemUpdatedAt = 'SYSTEM_UPDATED_AT',
  SystemUpdatedBy = 'SYSTEM_UPDATED_BY',
  Text = 'TEXT',
  Uuid = 'UUID',
  Wysiwyg = 'WYSIWYG',
}

export type FieldDescriptor = {
  __typename?: 'FieldDescriptor';
  config: Maybe<FieldDescriptorConfig>;
  name: Maybe<Scalars['String']>;
  renderer: Maybe<Scalars['String']>;
  required: Maybe<Scalars['Boolean']>;
  types: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FieldDescriptorConfig = {
  __typename?: 'FieldDescriptorConfig';
  multiple: Maybe<Scalars['Boolean']>;
  url: Maybe<Scalars['String']>;
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
  Ne = 'NE',
  Or = 'OR',
  StartsWith = 'STARTS_WITH',
}

export type Form = {
  __typename?: 'Form';
  dictionary: Maybe<Scalars['Map_String_Map_Scalar']>;
  document: Maybe<Document>;
};

export type HeaderElementsIn = {
  figmaUrl: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  payload: InputMaybe<Scalars['Text']>;
  theme: InputMaybe<Scalars['String']>;
};

export type HeaderElementsList = {
  __typename?: 'HeaderElementsList';
  documents: Maybe<Array<Maybe<HeaderElementsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type HeaderElementsMutation = {
  __typename?: 'HeaderElementsMutation';
  create: Maybe<HeaderElementsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<HeaderElementsOut>;
};

export type HeaderElementsMutationCreateArgs = {
  data: HeaderElementsIn;
};

export type HeaderElementsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type HeaderElementsMutationUpdateArgs = {
  data: HeaderElementsIn;
  id: Scalars['String'];
};

export type HeaderElementsOut = {
  __typename?: 'HeaderElementsOut';
  figmaUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  payload: Maybe<Scalars['Text']>;
  theme: Maybe<Scalars['String']>;
};

export type HeaderElementsQuery = {
  __typename?: 'HeaderElementsQuery';
  get: Maybe<HeaderElementsOut>;
  list: Maybe<HeaderElementsList>;
};

export type HeaderElementsQueryGetArgs = {
  id: Scalars['String'];
};

export type HeaderElementsQueryListArgs = {
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

export type InputElementsIn = {
  figmaUrl: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  payload: InputMaybe<Scalars['Text']>;
  theme: InputMaybe<Scalars['String']>;
};

export type InputElementsList = {
  __typename?: 'InputElementsList';
  documents: Maybe<Array<Maybe<InputElementsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type InputElementsMutation = {
  __typename?: 'InputElementsMutation';
  create: Maybe<InputElementsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<InputElementsOut>;
};

export type InputElementsMutationCreateArgs = {
  data: InputElementsIn;
};

export type InputElementsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type InputElementsMutationUpdateArgs = {
  data: InputElementsIn;
  id: Scalars['String'];
};

export type InputElementsOut = {
  __typename?: 'InputElementsOut';
  figmaUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  payload: Maybe<Scalars['Text']>;
  theme: Maybe<Scalars['String']>;
};

export type InputElementsQuery = {
  __typename?: 'InputElementsQuery';
  get: Maybe<InputElementsOut>;
  list: Maybe<InputElementsList>;
};

export type InputElementsQueryGetArgs = {
  id: Scalars['String'];
};

export type InputElementsQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
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

export type MenuIn = {
  id: InputMaybe<Scalars['String']>;
  items: Scalars['Json'];
  name: InputMaybe<Scalars['String']>;
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
  id: Maybe<Scalars['String']>;
  items: Maybe<Scalars['Json']>;
  name: Maybe<Scalars['String']>;
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
  embeds: Maybe<Scalars['Map_String_EntityDescriptor_Scalar']>;
  entities: Maybe<Array<Maybe<EntityDescriptor>>>;
  handbooks: Maybe<Scalars['Map_String_List_Scalar']>;
};

export type ModelAction = {
  __typename?: 'ModelAction';
  name: Maybe<Scalars['String']>;
  type: Maybe<ActionType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ButtonElementsMutation: Maybe<ButtonElementsMutation>;
  HeaderElementsMutation: Maybe<HeaderElementsMutation>;
  InputElementsMutation: Maybe<InputElementsMutation>;
  MenuMutation: Maybe<MenuMutation>;
  PageMutation: Maybe<PageMutation>;
  ScriptConfigMutation: Maybe<ScriptConfigMutation>;
  TextElementsMutation: Maybe<TextElementsMutation>;
  UserMutation: Maybe<UserMutation>;
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

export enum OperationType {
  Autocomplete = 'AUTOCOMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Table = 'TABLE',
  Update = 'UPDATE',
}

export type PageIn = {
  blocks: InputMaybe<Scalars['Json']>;
  description: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['Image']>;
  isArticle: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  url: Scalars['String'];
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
  blocks: Maybe<Scalars['Json']>;
  description: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  image: Maybe<Scalars['Image']>;
  isArticle: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  ButtonElementsQuery: Maybe<ButtonElementsQuery>;
  HeaderElementsQuery: Maybe<HeaderElementsQuery>;
  InputElementsQuery: Maybe<InputElementsQuery>;
  MenuQuery: Maybe<MenuQuery>;
  PageQuery: Maybe<PageQuery>;
  ScriptConfigQuery: Maybe<ScriptConfigQuery>;
  TextElementsQuery: Maybe<TextElementsQuery>;
  UserQuery: Maybe<UserQuery>;
  get: Maybe<Form>;
  history: Maybe<History>;
  historyEntry: Maybe<HistoryEntry>;
  meta: Maybe<Meta>;
  scriptSuggestions: Maybe<Scalars['Json']>;
  search: Maybe<SortedSearch>;
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

export type QueryTableArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  type: InputMaybe<Scalars['String']>;
};

export enum Relationship {
  ManyToMany = 'MANY_TO_MANY',
  ManyToOne = 'MANY_TO_ONE',
  OneToMany = 'ONE_TO_MANY',
  Ref = 'REF',
}

export type SaveResult = {
  __typename?: 'SaveResult';
  document: Maybe<Document>;
  errors: Maybe<Array<Maybe<FieldValidationError>>>;
};

export type ScriptConfigIn = {
  bodyScript: InputMaybe<Scalars['Text']>;
  headScript: InputMaybe<Scalars['Text']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ScriptConfigList = {
  __typename?: 'ScriptConfigList';
  documents: Maybe<Array<Maybe<ScriptConfigOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ScriptConfigMutation = {
  __typename?: 'ScriptConfigMutation';
  create: Maybe<ScriptConfigOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<ScriptConfigOut>;
};

export type ScriptConfigMutationCreateArgs = {
  data: ScriptConfigIn;
};

export type ScriptConfigMutationDeleteArgs = {
  id: Scalars['String'];
};

export type ScriptConfigMutationUpdateArgs = {
  data: ScriptConfigIn;
  id: Scalars['String'];
};

export type ScriptConfigOut = {
  __typename?: 'ScriptConfigOut';
  bodyScript: Maybe<Scalars['Text']>;
  headScript: Maybe<Scalars['Text']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type ScriptConfigQuery = {
  __typename?: 'ScriptConfigQuery';
  get: Maybe<ScriptConfigOut>;
  list: Maybe<ScriptConfigList>;
};

export type ScriptConfigQueryGetArgs = {
  id: Scalars['String'];
};

export type ScriptConfigQueryListArgs = {
  filters: InputMaybe<Array<InputMaybe<InputFilter>>>;
  orders: InputMaybe<Array<InputMaybe<InputOrder>>>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type SecurityRule = {
  __typename?: 'SecurityRule';
  operation: Maybe<OperationType>;
  roles: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SortedSearch = {
  __typename?: 'SortedSearch';
  documents: Maybe<Array<Maybe<Scalars['Json']>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  scroll: Maybe<Scalars['String']>;
};

export enum StorageType {
  File = 'FILE',
  Kv = 'KV',
  Postgres = 'POSTGRES',
}

export type Table = {
  __typename?: 'Table';
  documents: Maybe<Array<Maybe<Document>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Long']>;
};

export type TextElementsIn = {
  figmaUrl: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payload: InputMaybe<Scalars['Text']>;
  theme: InputMaybe<Scalars['String']>;
};

export type TextElementsList = {
  __typename?: 'TextElementsList';
  documents: Maybe<Array<Maybe<TextElementsOut>>>;
  hasMore: Maybe<Scalars['Boolean']>;
  totalCount: Maybe<Scalars['Int']>;
};

export type TextElementsMutation = {
  __typename?: 'TextElementsMutation';
  create: Maybe<TextElementsOut>;
  delete: Maybe<Scalars['Void']>;
  update: Maybe<TextElementsOut>;
};

export type TextElementsMutationCreateArgs = {
  data: TextElementsIn;
};

export type TextElementsMutationDeleteArgs = {
  id: Scalars['String'];
};

export type TextElementsMutationUpdateArgs = {
  data: TextElementsIn;
  id: Scalars['String'];
};

export type TextElementsOut = {
  __typename?: 'TextElementsOut';
  figmaUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  payload: Maybe<Scalars['Text']>;
  theme: Maybe<Scalars['String']>;
};

export type TextElementsQuery = {
  __typename?: 'TextElementsQuery';
  get: Maybe<TextElementsOut>;
  list: Maybe<TextElementsList>;
};

export type TextElementsQueryGetArgs = {
  id: Scalars['String'];
};

export type TextElementsQueryListArgs = {
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
  cmseditedby: InputMaybe<Scalars['Json']>;
  cmsupdatedate: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  roles: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  cmseditedby: Maybe<Scalars['Json']>;
  cmsupdatedate: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  roles: Maybe<Array<Maybe<Scalars['String']>>>;
  username: Maybe<Scalars['String']>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  get: Maybe<UserOut>;
  list: Maybe<UserList>;
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
