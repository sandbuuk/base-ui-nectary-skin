import type { TSinchBadgeMode } from './types'

export const modeValues: readonly TSinchBadgeMode[] = ['square', 'circle']

type TAssertMode = (value: string | null) => asserts value is TSinchBadgeMode

export const assertMode: TAssertMode = (value) => {
  if (value === null || !modeValues.includes(value as any)) {
    throw new Error(`sinch-badge: invalid mode attribute: ${value}`)
  }
}
