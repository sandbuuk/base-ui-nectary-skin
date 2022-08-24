import type { TSinchAlertType } from './types'

export const typeValues: readonly TSinchAlertType[] = ['info', 'warn', 'error']

type TAssertType = (value: string | null) => asserts value is TSinchAlertType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-alert: invalid type attribute: ${value}`)
  }
}
