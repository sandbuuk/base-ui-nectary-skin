import type { TSinchIconButtonType } from './types'

export const typeValues: readonly TSinchIconButtonType[] = ['primary', 'secondary', 'tertiary']

type TAssertType = (value: string | null) => asserts value is TSinchIconButtonType

export const assertType: TAssertType = (value) => {
  if (value === null || value.length === 0) {
    // Allow default type
    return
  }

  if (!typeValues.includes(value as any)) {
    throw new Error(`sinch-icon-button: invalid type attribute: ${value}`)
  }
}
