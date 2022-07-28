import type { TSinchSegmentSize } from './types'

export const sizeValues: readonly TSinchSegmentSize[] = ['l', 'm', 's']

type TAssertSize = (value: string | null) => asserts value is TSinchSegmentSize

export const assertSize: TAssertSize = (value) => {
  if (value === null || !sizeValues.includes(value as any)) {
    throw new Error(`sinch-segment: invalid size attribute: ${value}`)
  }
}
