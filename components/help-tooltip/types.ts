import type { TSinchTooltipProps } from '../tooltip/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

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
