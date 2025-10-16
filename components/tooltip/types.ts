import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type TSinchTooltipTextAlign = 'center' | 'right' | 'left'
export type TSinchTooltipType = 'slow' | 'fast'

export type TSinchTooltipProps = {
  /*
  * Property that allows to use the tooltip in controlled mode.
  * If set, will force the open state to the prop's value. Otherwise if undefined use the default uncontrolled behavior
  * Is a string to make sure we can explictly set it to 'false'
  */
  'is-opened'?: string,
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchTooltipOrientation,
  /** Type */
  type?: TSinchTooltipType,
  /** Text Align */
  'text-align'?: TSinchTooltipTextAlign,
  /*
  * Whether or not the tooltip should be displayed in the case it is outside the viewport
  * If not present, this defaults to false, which should cover most common use cases
  * Note that this does not force it open/closed when it goes outside the viewport, this only affects cases where it was supposed to open in the first place (i.e is-opened=true or hover)
  */
  'show-outside-viewport'?: boolean,
  readonly footprintRect?: TRect,
  readonly tooltipRect?: TRect,
}

export type TSinchTooltipEvents = {
  /** Show event handler */
  '-show'?: (e: CustomEvent<void>) => void,
  /** Hide event handler */
  '-hide'?: (e: CustomEvent<void>) => void,
}

export type TSinchTooltipStyle = {
  // Shadow
  '--sinch-comp-tooltip-shadow'?: string,

  // Shape
  '--sinch-comp-tooltip-shape-radius'?: string,

  // Colors
  '--sinch-comp-tooltip-color-background'?: string,
  '--sinch-comp-tooltip-color-text'?: string,

  // Local Color Variables
  '--sinch-local-color-background'?: string,

  // Font
  '--sinch-comp-tooltip-font-body'?: string,

  // Text Alignment
  '--sinch-comp-text-align'?: string,

  // Global Color Text
  '--sinch-global-color-text'?: string,
}

export type TSinchTooltip = {
  props: TSinchTooltipProps,
  events: TSinchTooltipEvents,
  style: TSinchTooltipStyle,
}

export type TSinchTooltipElement = NectaryComponentVanillaByType<TSinchTooltip>
export type TSinchTooltipReact = NectaryComponentReactByType<TSinchTooltip>

declare global {
  interface NectaryComponentMap {
    'sinch-tooltip': TSinchTooltip,
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': NectaryComponentVanilla<'sinch-tooltip'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': NectaryComponentReact<'sinch-tooltip'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tooltip': NectaryComponentReact<'sinch-tooltip'>,
    }
  }
}
