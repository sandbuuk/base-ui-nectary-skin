import type { TSinchTitleLevel, TSinchTitleType } from './types'

export const typeValues = ['xl', 'l', 'm', 's', 'xs'] as const
export const levelValues = ['1', '2', '3', '4', '5', '6'] as const

type TAssertLevel = (value: string | null) => asserts value is TSinchTitleLevel
type TAssertType = (value: string | null) => asserts value is TSinchTitleType

export const assertLevel: TAssertLevel = (value) => {
  if (value === null || !levelValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid aria-level attribute: ${value}`)
  }
}

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid type attribute: ${value}`)
  }
}
