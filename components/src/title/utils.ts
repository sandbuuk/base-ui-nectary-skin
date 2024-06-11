import type { TSinchTitleLevel, TSinchTitleType } from './types'

export const typeValues: readonly TSinchTitleType[] = ['xl', 'l', 'm', 's', 'xs']

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
      return '' as TSinchTitleLevel
  }
}
