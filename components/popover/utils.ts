import type { TSinchPopoverOrientation } from './types'
import type { TSinchPopOrientation } from '../pop/types'

export const orientationValues: readonly TSinchPopoverOrientation[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'bottom',
  'top',
]

export const getPopOrientation = (orientation: TSinchPopoverOrientation): TSinchPopOrientation => {
  if (orientation === 'top') {
    return 'top-stretch'
  }

  if (orientation === 'bottom') {
    return 'bottom-stretch'
  }

  return orientation
}
