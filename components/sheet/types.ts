import type {
  NectaryComponentReact,
  NectaryComponentReactByType,
  NectaryComponentVanilla,
  NectaryComponentVanillaByType,
  TRect,
} from '../types'

export type TSinchSheetCloseDetail = 'close' | 'escape' | 'backdrop'
export type TSinchSheetAnimationDetail = {
  action: 'expand' | 'collapse',
  /** Dialog width, useful for push overlay */
  width: number,
  /** Dialog height, useful for push overlay */
  height: number,
  /** Animation duration, read from CSS var */
  duration: string,
  /** Animation easing, read from CSS var */
  easing: string,
}
export type TSinchSheetPlacement = 'left' | 'right' | 'top' | 'bottom'
export type TSinchSheetOverlayMode = 'modal' | 'push'

export type TSinchSheetProps = {
  /** Controls whether the sheet should be open */
  open: boolean,
  /** Sheet caption */
  caption: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Sheet placement */
  placement?: TSinchSheetPlacement,
  /** Sheet overlay, set once when connecting the component */
  overlay?: TSinchSheetOverlayMode,
  readonly dialogRect?: TRect,
  readonly closeButtonRect?: TRect,
}

export type TSinchSheetEvents = {
  /** close event handler */
  '-close'?: (e: CustomEvent<TSinchSheetCloseDetail>) => void,
  /** animation start event handler */
  '-animation-start'?: (e: CustomEvent<TSinchSheetAnimationDetail>) => void,
  /** animation end event handler */
  '-animation-end'?: (e: CustomEvent<TSinchSheetAnimationDetail>) => void,
}

export type TSinchSheetStyle = {
  // Component Properties
  '--sinch-comp-sheet-size-gap'?: string,
  '--sinch-comp-sheet-size-max-horizontal'?: string,
  '--sinch-comp-sheet-size-max-vertical'?: string,
  '--sinch-comp-sheet-size-padding'?: string,
  '--sinch-sheet-close-button-display'?: string,

  // Animation
  '--sinch-comp-sheet-animation-duration'?: string,
  '--sinch-comp-sheet-animation-easing'?: string,

  // Shape
  '--sinch-comp-sheet-shape-radius'?: string,

  // Fonts
  '--sinch-comp-sheet-font-description'?: string,
  '--sinch-comp-sheet-font-title'?: string,

  // Shadows
  '--sinch-comp-sheet-size-backdrop-blur'?: string,

  // Colors - Default State
  '--sinch-comp-sheet-color-backdrop-from'?: string,
  '--sinch-comp-sheet-color-backdrop-to'?: string,
  '--sinch-comp-sheet-color-background'?: string,
  '--sinch-comp-sheet-color-description'?: string,
  '--sinch-comp-sheet-color-title'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-color-text'?: string,
  '--sinch-comp-title-font'?: string,
}

export type TSinchSheet = {
  props: TSinchSheetProps,
  events: TSinchSheetEvents,
  style: TSinchSheetStyle,
}

export type TSinchSheetElement = NectaryComponentVanillaByType<TSinchSheet>
export type TSinchSheetReact = NectaryComponentReactByType<TSinchSheet>

declare global {
  interface NectaryComponentMap {
    'sinch-sheet': TSinchSheet,
  }

  interface HTMLElementTagNameMap {
    'sinch-sheet': NectaryComponentVanilla<'sinch-sheet'>,
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sinch-sheet': NectaryComponentReact<'sinch-sheet'>,
    }
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-sheet': NectaryComponentReact<'sinch-sheet'>,
    }
  }
}
