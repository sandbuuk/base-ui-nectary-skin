import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchPopoverOrientation = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom' | 'top' | 'left' | 'right'

export type TSinchPopoverProps = {
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchPopoverOrientation,
  /** Modal/non-modal mode */
  modal?: boolean,
  /** Show tip */
  tip?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  readonly footprintRect?: TRect,
  readonly popoverRect?: TRect,
}

export type TSinchPopoverEvents = {
  /** Close event handler */
  '-close'?: (e: CustomEvent<void>) => void,
}

export type TSinchPopoverStyle = {
  // Shape
  '--sinch-comp-popover-shape-radius'?: string,

  // Shadow
  '--sinch-comp-popover-shadow'?: string,

  // Default State Colors
  '--sinch-comp-popover-color-default-background-initial'?: string,
  '--sinch-comp-popover-color-default-border-initial'?: string,
}

export type TSinchPopover = {
  props: TSinchPopoverProps,
  events: TSinchPopoverEvents,
  style: TSinchPopoverStyle,
}

export type TSinchPopoverElement = NectaryComponentVanillaByType<TSinchPopover>
export type TSinchPopoverReact = NectaryComponentReactByType<TSinchPopover>

declare global {
  interface NectaryComponentMap {
    'sinch-popover': TSinchPopover,
  }

  interface HTMLElementTagNameMap {
    'sinch-popover': NectaryComponentVanilla<'sinch-popover'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-popover': NectaryComponentReact<'sinch-popover'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-popover': NectaryComponentReact<'sinch-popover'>,
    }
  }
}
