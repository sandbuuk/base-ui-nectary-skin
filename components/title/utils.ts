import type { TSinchTitleLevel, TSinchTitleType } from './types'

export const typeValues: readonly TSinchTitleType[] = ['xl', 'l', 'm', 's', 'xs']
export const levelValues: readonly TSinchTitleLevel[] = ['1', '2', '3', '4', '5', '6']

type TAssertLevel = (value: string | null) => asserts value is TSinchTitleLevel

export const assertLevel: TAssertLevel = (value) => {
  if (value === null || !levelValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid level attribute: ${value}`)
  }
}

type TAssertType = (value: string | null) => asserts value is TSinchTitleType

export const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid type attribute: ${value}`)
  }
}

export const getTitleLevelFromType = (type: TSinchTitleType): TSinchTitleLevel => {
  switch (type) {
    case 'xl':
      return '1'
    case 'l':
      return '2'
    case 'm':
      return '3'
    case 's':
      return '4'
    case 'xs':
      return '5'
    default:
      throw new Error(`sinch-title: invalid type value: ${type}`)
  }
}

export const getTitleTypeFromLevel = (level: TSinchTitleLevel): TSinchTitleType => {
  switch (level) {
    case '1':
      return 'xl'
    case '2':
      return 'l'
    case '3':
      return 'm'
    case '4':
      return 's'
    case '5':
    case '6':
      return 'xs'
    default:
      throw new Error(`sinch-title: invalid level value: ${level}`)
  }
}
