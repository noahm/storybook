import type { ComponentType } from 'react';
import type { WebRenderer } from '@storybook/types/renderer';

export type { RenderContext, StoryContext } from '@storybook/types/renderer';

export interface ReactRenderer extends WebRenderer {
  component: ComponentType<this['T']>;
  storyResult: StoryFnReactReturnType;
}

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export type StoryFnReactReturnType = JSX.Element;
