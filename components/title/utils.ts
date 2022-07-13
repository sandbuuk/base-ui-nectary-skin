import type { TSinchTitleLevel, TSinchTitleType } from './types'

export const typeValues: readonly TSinchTitleType[] = ['xl', 'l', 'm', 's', 'xs']
export const levelValues: readonly TSinchTitleLevel[] = ['1', '2', '3', '4', '5', '6']

type TAssertLevel = (value: string | null) => asserts value is TSinchTitleLevel
type TAssertType = (value: string | null) => asserts value is TSinchTitleType

export const assertLevel: TAssertLevel = (value) => {
  if (value === null || !levelValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid level attribute: ${value}`)
  }
}

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid type attribute: ${value}`)
  }
}
