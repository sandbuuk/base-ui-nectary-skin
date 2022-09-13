import type { TSinchToastType } from './types'

export const typeValues: readonly TSinchToastType[] = ['info', 'success', 'warn', 'error']

type TAssertType = (value: string | null) => asserts value is TSinchToastType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-toast: invalid type attribute: ${value}`)
  }
}
