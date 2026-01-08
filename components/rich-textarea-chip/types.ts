import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchRichTextareaChipProps = {
  /** Text */
  text: string,
  /** Readonly - hides the close button */
  readonly?: boolean,
}

export type TSinchRichTextareaChipEvents = {
  /** Click event handler */
  '-click'?: (e: CustomEvent<void>) => void,
}

export type TSinchRichTextareaChipStyle = {
  // Sizes
  '--sinch-comp-chip-size-container-m'?: string,
  '--sinch-comp-chip-size-icon-m'?: string,

  // Fonts
  '--sinch-comp-chip-font-size-m-label'?: string,

  // Colors - Neutral State
  '--sinch-comp-chip-color-neutral-default-background-initial'?: string,
  '--sinch-comp-chip-color-neutral-default-foreground-initial'?: string,
  '--sinch-comp-chip-color-outiline-focus'?: string,

  // Shapes
  '--sinch-comp-chip-shape-radius'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
  '--sinch-comp-text-font'?: string,
}

export type TSinchRichTextareaChip = {
  props: TSinchRichTextareaChipProps,
  events: TSinchRichTextareaChipEvents,
  style: TSinchRichTextareaChipStyle,
}

export type TSinchRichTextareaChipElement = NectaryComponentVanillaByType<TSinchRichTextareaChip>
export type TSinchRichTextareaChipReact = NectaryComponentReactByType<TSinchRichTextareaChip>

declare global {
  interface NectaryComponentMap {
    'sinch-rich-textarea-chip': TSinchRichTextareaChip,
  }

  interface HTMLElementTagNameMap {
    'sinch-rich-textarea-chip': NectaryComponentVanilla<'sinch-rich-textarea-chip'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-rich-textarea-chip': NectaryComponentReact<'sinch-rich-textarea-chip'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-rich-textarea-chip': NectaryComponentReact<'sinch-rich-textarea-chip'>,
    }
  }
}
