import type { TSinchFileStatusType } from './types'

export const typeValues: readonly TSinchFileStatusType[] = ['pending', 'loading', 'progress', 'success', 'error']

type TAssertType = (value: string | null) => asserts value is TSinchFileStatusType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-file-status: invalid type attribute: ${value}`)
  }
}
