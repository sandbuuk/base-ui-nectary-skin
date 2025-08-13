import type { TSinchTooltipProps } from '../tooltip/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchHelpTooltipProps = TSinchTooltipProps

export type TSinchHelpTooltipStyle = {
  // Global Properties
  '--sinch-global-size-icon'?: string,
}

export type TSinchHelpTooltip = {
  props: TSinchHelpTooltipProps,
  style: TSinchHelpTooltipStyle,
}

export type TSinchHelpTooltipElement = NectaryComponentVanillaByType<TSinchHelpTooltip>
export type TSinchHelpTooltipReact = NectaryComponentReactByType<TSinchHelpTooltip>

declare global {
  interface NectaryComponentMap {
    'sinch-help-tooltip': TSinchHelpTooltip,
  }

  interface HTMLElementTagNameMap {
    'sinch-help-tooltip': NectaryComponentVanilla<'sinch-help-tooltip'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-help-tooltip': NectaryComponentReact<'sinch-help-tooltip'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-help-tooltip': NectaryComponentReact<'sinch-help-tooltip'>,
    }
  }
}
