import type { TSinchInlineAlertType } from './types'

export const typeValues: readonly TSinchInlineAlertType[] = ['info', 'success', 'warn', 'error']

type TAssertType = (value: string | null) => asserts value is TSinchInlineAlertType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-inline-alert: invalid type attribute: ${value}`)
  }
}
