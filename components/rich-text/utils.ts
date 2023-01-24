import type { TSinchTextType } from '../text/types'

export const sizeValues: readonly TSinchTextType[] = ['m', 's', 'xs', 'xxs']

type TAssertSize = (value: string | null) => asserts value is TSinchTextType

export const assertSize: TAssertSize = (value) => {
  if (value === null || !sizeValues.includes(value as any)) {
    throw new Error(`sinch-rich-text: invalid "size" attribute: "${value}"`)
  }
}
