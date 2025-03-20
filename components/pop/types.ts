import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

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
