import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSegmentedControlProps = {
  value: string,
  'aria-label': string,
}

export type TSinchSegmentedControlEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchSegmentedControl = {
  props: TSinchSegmentedControlProps,
  events: TSinchSegmentedControlEvents,
}

export type TSinchSegmentedControlElement = NectaryComponentVanillaByType<TSinchSegmentedControl>
export type TSinchSegmentedControlReact = NectaryComponentReactByType<TSinchSegmentedControl>

declare global {
  interface NectaryComponentMap {
    'sinch-segmented-control': TSinchSegmentedControl,
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-control': NectaryComponentVanilla<'sinch-segmented-control'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-control': NectaryComponentReact<'sinch-segmented-control'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-segmented-control': NectaryComponentReact<'sinch-segmented-control'>,
    }
  }
}
