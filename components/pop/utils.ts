import type { TSinchPopOrientation } from './types'

export const orientationValues: readonly TSinchPopOrientation[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'bottom-stretch',
  'bottom-center',
  'top-stretch',
  'top-center',
  'center-left',
  'center-right',
]

type TAssertOrientation = (value: string | null) => asserts value is TSinchPopOrientation

export const assertOrientation: TAssertOrientation = (value) => {
  if (value === null || !orientationValues.includes(value as any)) {
    throw new Error(`sinch-pop: invalid orientation attribute: ${value}`)
  }
}
