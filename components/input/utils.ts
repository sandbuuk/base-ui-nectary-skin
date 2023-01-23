import type { TSinchInputType } from './types'

export const inputTypes: readonly TSinchInputType[] = ['text', 'password']

type TAssertType = (value: string | null) => asserts value is TSinchInputType | null

export const assertType: TAssertType = (value) => {
  if (value !== null && !inputTypes.includes(value as any)) {
    throw new Error(`sinch-input: invalid type attribute: ${value}`)
  }
}
