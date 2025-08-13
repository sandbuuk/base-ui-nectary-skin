import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchProgressProps = {
  value: number,
  detailed?: boolean,
  'aria-label': string,
}

export type TSinchProgressStyle = {
  // Colors - Default State
  '--sinch-comp-progress-color-default-background-initial'?: string,
  '--sinch-comp-progress-color-default-bar-initial'?: string,
  '--sinch-comp-progress-color-default-text-initial'?: string,
}

export type TSinchProgress = {
  props: TSinchProgressProps,
  style: TSinchProgressStyle,
}

export type TSinchProgressElement = NectaryComponentVanillaByType<TSinchProgress>
export type TSinchProgressReact = NectaryComponentReactByType<TSinchProgress>

declare global {
  interface NectaryComponentMap {
    'sinch-progress': TSinchProgress,
  }

  interface HTMLElementTagNameMap {
    'sinch-progress': NectaryComponentVanilla<'sinch-progress'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress': NectaryComponentReact<'sinch-progress'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-progress': NectaryComponentReact<'sinch-progress'>,
    }
  }
}
