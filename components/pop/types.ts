import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchPopOrientation =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-stretch'
  | 'top-center'
  | 'top-stretch'
  | 'center-right'
  | 'center-left'

export type TSinchPopProps = {
  /** Allow scrolling of the page when pop is open */
  'allow-scroll'?: boolean,
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchPopOrientation,
  /** Modal/non-modal mode */
  modal?: boolean,
  inset?: number,
  /** Label that is used for a11y */
  'aria-label': string,
  readonly footprintRect?: TRect,
  readonly popoverRect?: TRect,

}

export type TSinchPopEvents = {
  /** Close event handler */
  '-close'?: (e: CustomEvent<void>) => void,
}

export type TSinchPop = {
  props: TSinchPopProps,
  events: TSinchPopEvents,
}

export type TSinchPopElement = NectaryComponentVanillaByType<TSinchPop>
export type TSinchPopReact = NectaryComponentReactByType<TSinchPop>

declare global {
  interface NectaryComponentMap {
    'sinch-pop': TSinchPop,
  }

  interface HTMLElementTagNameMap {
    'sinch-pop': NectaryComponentVanilla<'sinch-pop'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-pop': NectaryComponentReact<'sinch-pop'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-pop': NectaryComponentReact<'sinch-pop'>,
    }
  }
}
