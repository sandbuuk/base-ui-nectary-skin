import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSkeletonProps = {
  /** Card like container */
  card?: boolean,
}

export type TSinchSkeletonStyle = {
  // Surface Colors
  '--sinch-sys-color-surface-primary-default'?: string,
  '--sinch-sys-color-surface-tertiary-default'?: string,

  // Border
  '--sinch-sys-color-border-subtle'?: string,

  // Shape
  '--sinch-sys-shape-radius-l'?: string,
}

export type TSinchSkeleton = {
  props: TSinchSkeletonProps,
  style: TSinchSkeletonStyle,
}

export type TSinchSkeletonElement = NectaryComponentVanillaByType<TSinchSkeleton>
export type TSinchSkeletonReact = NectaryComponentReactByType<TSinchSkeleton>

declare global {
  interface NectaryComponentMap {
    'sinch-skeleton': TSinchSkeleton,
  }

  interface HTMLElementTagNameMap {
    'sinch-skeleton': NectaryComponentVanilla<'sinch-skeleton'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton': NectaryComponentReact<'sinch-skeleton'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-skeleton': NectaryComponentReact<'sinch-skeleton'>,
    }
  }
}
