import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

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
