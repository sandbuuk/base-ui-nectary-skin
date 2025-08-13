import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSegmentedControlOptionProps = {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}

export type TSinchSegmentedControlOptionEvents = {
  '-focus'?: (e: CustomEvent<void>) => void,
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchSegmentedControlOptionStyle = {
  // Shape
  '--sinch-comp-segmented-control-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-segmented-control-color-default-text-initial'?: string,
  '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-default-border-initial'?: string,
  '--sinch-comp-segmented-control-color-default-background-initial'?: string,
  '--sinch-comp-segmented-control-color-default-background-hover'?: string,
  '--sinch-comp-segmented-control-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-segmented-control-color-checked-text-initial'?: string,
  '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
  '--sinch-comp-segmented-control-color-checked-background-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-segmented-control-color-disabled-text-initial'?: string,
  '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
  '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
  '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,

  // Font
  '--sinch-comp-segmented-control-font-label'?: string,

  // Size
  '--sinch-comp-segmented-control-size-icon'?: string,
}

export type TSinchSegmentedControlOption = {
  props: TSinchSegmentedControlOptionProps,
  events: TSinchSegmentedControlOptionEvents,
  style: TSinchSegmentedControlOptionStyle,
}

export type TSinchSegmentedControlOptionElement = NectaryComponentVanillaByType<TSinchSegmentedControlOption>
export type TSinchSegmentedControlOptionReact = NectaryComponentReactByType<TSinchSegmentedControlOption>

declare global {
  interface NectaryComponentMap {
    'sinch-segmented-control-option': TSinchSegmentedControlOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-control-option': NectaryComponentVanilla<'sinch-segmented-control-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-control-option': NectaryComponentReact<'sinch-segmented-control-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-segmented-control-option': NectaryComponentReact<'sinch-segmented-control-option'>,
    }
  }
}
