import type { TSinchButtonType } from './types'

export const typeValues: readonly TSinchButtonType[] = ['primary', 'secondary', 'tertiary', 'cta-primary', 'cta-secondary', 'destructive']

type TAssertType = (value: string | null) => asserts value is TSinchButtonType

export const assertType: TAssertType = (value) => {
  if (value === null || value.length === 0) {
    // Allow default type
    return
  }

  if (!typeValues.includes(value as any)) {
    throw new Error(`sinch-button: invalid type attribute: ${value}`)
  }
}
