import type { TSinchTooltipOrientation, TSinchTooltipType, TSinchTooltipTextAlign } from './types'
import type { TSinchPopOrientation } from '../pop/types'

export const typeValues: readonly TSinchTooltipType[] = ['fast', 'slow']

export const orientationValues: readonly TSinchTooltipOrientation[] = [
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
]

export const textAlignValues: readonly TSinchTooltipTextAlign[] = [
  'right',
  'center',
  'left',
]

export const getPopOrientation = (orientation: TSinchTooltipOrientation): TSinchPopOrientation => {
  if (orientation === 'top') {
    return 'top-center'
  }

  if (orientation === 'bottom') {
    return 'bottom-center'
  }

  if (orientation === 'left') {
    return 'center-left'
  }

  if (orientation === 'right') {
    return 'center-right'
  }

  return orientation
}
