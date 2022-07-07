import type { TSinchTextType } from './types'

export const typeValues = ['m', 's', 'xs', 'xxs'] as const

type TAssertType = (value: string | null) => asserts value is TSinchTextType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid type attribute: ${value}`)
  }
}
