/* eslint-disable @typescript-eslint/naming-convention */
import type { ViewMode as ViewModeBase, StoryId, Parameters } from '@storybook/csf';

export type {
  AnnotatedStoryFn,
  Args,
  ArgsEnhancer,
  ArgsFromMeta,
  ArgsStoryFn,
  ArgTypes,
  ArgTypesEnhancer,
  BaseAnnotations,
  ComponentAnnotations,
  ComponentId,
  ComponentTitle,
  Conditional,
  DecoratorApplicator,
  DecoratorFunction,
  Globals,
  GlobalTypes,
  IncludeExcludeOptions,
  InputType,
  LegacyAnnotatedStoryFn,
  LegacyStoryAnnotationsOrFn,
  LegacyStoryFn,
  LoaderFunction,
  Parameters,
  PartialStoryFn,
  PlayFunction,
  PlayFunctionContext,
  Renderer,
  SBArrayType,
  SBEnumType,
  SBIntersectionType,
  SBObjectType,
  SBOtherType,
  SBScalarType,
  SBType,
  SBUnionType,
  SeparatorOptions,
  StepFunction,
  StepLabel,
  StepRunner,
  StoryAnnotations,
  StoryAnnotationsOrFn,
  StoryContext,
  StoryContextForEnhancers,
  StoryContextForLoaders,
  StoryContextUpdate,
  StoryFn,
  StoryId,
  StoryIdentifier,
  StoryKind,
  StoryName,
  StrictArgs,
  StrictArgTypes,
  StrictGlobalTypes,
  StrictInputType,
  Tag,
} from '@storybook/csf';

// The `any` here is the story store's `StoreItem` record. Ideally we should probably only
// pass a defined subset of that full data, but we pass it all so far :shrug:
export type IndexEntryLegacy = [StoryId, any, Parameters, Parameters];
export type Addon_Comparator<T> = ((a: T, b: T) => boolean) | ((a: T, b: T) => number);
export type Addon_StorySortComparator = Addon_Comparator<IndexEntryLegacy>;
export type Addon_StorySortParameter = Addon_StorySortComparator | Addon_StorySortObjectParameter;
export type Addon_StorySortMethod = 'configure' | 'alphabetical';
export interface Addon_StorySortObjectParameter {
  method?: Addon_StorySortMethod;
  order?: any[];
  locales?: string;
  includeNames?: boolean;
}

export interface Addon_OptionsParameter extends Object {
  storySort?: Addon_StorySortParameter;
  theme?: {
    base: string;
    brandTitle?: string;
  };
  [key: string]: any;
}

type OrString<T extends string> = T | (string & {});

export type ViewMode = OrString<ViewModeBase | 'settings'> | undefined;

type Layout = 'centered' | 'fullscreen' | 'padded' | 'none';

export interface StorybookParameters {
  options?: Addon_OptionsParameter;
  /**
   * The layout property defines basic styles added to the preview body where the story is rendered.
   *
   * If you pass `none`, no styles are applied.
   */
  layout?: Layout;
}

export interface StorybookInternalParameters extends StorybookParameters {
  fileName?: string;
  docsOnly?: true;
}

export type Path = string;
