import type { TSinchTooltipOrientation } from './types'
import type { TSinchPopOrientation } from '../pop/types'

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

type TAssertOrientation = (value: string | null) => asserts value is TSinchTooltipOrientation

export const assertOrientation: TAssertOrientation = (value) => {
  if (value === null || !orientationValues.includes(value as any)) {
    throw new Error(`sinch-tooltip: invalid orientation attribute: ${value}`)
  }
}
