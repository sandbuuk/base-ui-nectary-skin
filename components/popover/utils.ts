import type { TSinchPopOrientation } from '../pop/types'
import type { TSinchPopoverOrientation } from './types'

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

type TAssertOrientation = (value: string | null) => asserts value is TSinchPopoverOrientation

export const assertOrientation: TAssertOrientation = (value) => {
  if (value === null || !orientationValues.includes(value as any)) {
    throw new Error(`sinch-popover: invalid orientation attribute: ${value}`)
  }
}
