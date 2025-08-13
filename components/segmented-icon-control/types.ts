import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSegmentedIconControlProps = {
  value: string,
  multiple?: boolean,
  'aria-label': string,
}

export type TSinchSegmentedIconControlEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchSegmentedIconControl = {
  props: TSinchSegmentedIconControlProps,
  events: TSinchSegmentedIconControlEvents,
}

export type TSinchSegmentedIconControlElement = NectaryComponentVanillaByType<TSinchSegmentedIconControl>
export type TSinchSegmentedIconControlReact = NectaryComponentReactByType<TSinchSegmentedIconControl>

declare global {
  interface NectaryComponentMap {
    'sinch-segmented-icon-control': TSinchSegmentedIconControl,
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-icon-control': NectaryComponentVanilla<'sinch-segmented-icon-control'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-icon-control': NectaryComponentReact<'sinch-segmented-icon-control'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-segmented-icon-control': NectaryComponentReact<'sinch-segmented-icon-control'>,
    }
  }
}
