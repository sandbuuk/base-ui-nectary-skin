import type {
  NectaryComponentReact,
  NectaryComponentReactByType,
  NectaryComponentVanilla,
  NectaryComponentVanillaByType,
  TRect,
} from '../types'

export type TSinchSheetTitleProps = {
  /** The title of the sheet. */
  title: string,
  /** The description of the sheet. */
  description?: string,
  /** Close button label that is used for a11y */
  'close-aria-label'?: string,
  readonly closeButtonRect?: TRect,
}

export type TSinchSheetTitleEvents = {
  /** close event handler */
  '-close'?: (e: CustomEvent<'close'>) => void,
}

export type TSinchSheetTitleStyle = {
  // Component Properties
  '--sinch-sheet-close-button-display'?: string,

  // Fonts
  '--sinch-comp-sheet-font-description'?: string,
  '--sinch-comp-sheet-font-title'?: string,

  // Colors
  '--sinch-comp-sheet-color-description'?: string,
  '--sinch-comp-sheet-color-title'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-color-text'?: string,
  '--sinch-comp-title-font'?: string,
  '--sinch-comp-text-font'?: string,
}

export type TSinchSheetTitle = {
  props: TSinchSheetTitleProps,
  events: TSinchSheetTitleEvents,
  style: TSinchSheetTitleStyle,
}

export type TSinchSheetTitleElement = NectaryComponentVanillaByType<TSinchSheetTitle>
export type TSinchSheetTitleReact = NectaryComponentReactByType<TSinchSheetTitle>

declare global {
  interface NectaryComponentMap {
    'sinch-sheet-title': TSinchSheetTitle,
  }

  interface HTMLElementTagNameMap {
    'sinch-sheet-title': NectaryComponentVanilla<'sinch-sheet-title'>,
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sinch-sheet-title': NectaryComponentReact<'sinch-sheet-title'>,
    }
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-sheet-title': NectaryComponentReact<'sinch-sheet-title'>,
    }
  }
}
