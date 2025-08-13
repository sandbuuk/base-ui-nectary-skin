import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSegmentExpandProps = {
  value: boolean,
  'aria-label': string,
}

export type TSinchSegmentExpandEvents = {
  '-change'?: (e: CustomEvent<boolean>) => void,
}

export type TSinchSegmentExpandStyle = {
  // Global
  '--sinch-global-size-icon'?: string,
}

export type TSinchSegmentExpand = {
  props: TSinchSegmentExpandProps,
  events: TSinchSegmentExpandEvents,
  style: TSinchSegmentExpandStyle,
}

export type TSinchSegmentExpandElement = NectaryComponentVanillaByType<TSinchSegmentExpand>
export type TSinchSegmentExpandReact = NectaryComponentReactByType<TSinchSegmentExpand>

declare global {
  interface NectaryComponentMap {
    'sinch-segment-collapse': TSinchSegmentExpand,
  }

  interface HTMLElementTagNameMap {
    'sinch-segment-collapse': NectaryComponentVanilla<'sinch-segment-collapse'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment-collapse': NectaryComponentReact<'sinch-segment-collapse'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-segment-collapse': NectaryComponentReact<'sinch-segment-collapse'>,
    }
  }
}
