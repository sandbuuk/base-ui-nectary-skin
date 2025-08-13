import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchToastManagerOrigin = 'top-right' | 'bottom-right'

export type TSinchToastManagerProps = {
  origin?: TSinchToastManagerOrigin,
  readonly containerRect?: TRect,
}

export type TSinchToastManagerMethods = {
  nthActionRect(nth: number): TRect | null,
  nthCloseRect(nth: number): TRect | null,
}

export type TSinchToastManager = {
  props: TSinchToastManagerProps,
  methods: TSinchToastManagerMethods,
}

export type TSinchToastManagerElement = NectaryComponentVanillaByType<TSinchToastManager>
export type TSinchToastManagerReact = NectaryComponentReactByType<TSinchToastManager>

declare global {
  interface NectaryComponentMap {
    'sinch-toast-manager': TSinchToastManager,
  }

  interface HTMLElementTagNameMap {
    'sinch-toast-manager': NectaryComponentVanilla<'sinch-toast-manager'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-toast-manager': NectaryComponentReact<'sinch-toast-manager'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-toast-manager': NectaryComponentReact<'sinch-toast-manager'>,
    }
  }
}
