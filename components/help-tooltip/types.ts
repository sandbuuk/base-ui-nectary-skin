import type { TSinchTooltipElement, TSinchTooltipReact } from '../tooltip/types'

export type TSinchHelpTooltipElement = TSinchTooltipElement

export type TSinchHelpTooltipReact = TSinchTooltipReact & {
  style?: {
    // Global Properties
    '--sinch-global-size-icon'?: string,
  },
}
