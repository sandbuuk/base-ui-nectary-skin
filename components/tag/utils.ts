import type { TSinchTagCategory } from './types'

export const categoryValues: readonly TSinchTagCategory[] = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt']

type TAssertCategory = (value: string | null) => asserts value is TSinchTagCategory

export const assertCategoryValue: TAssertCategory = (value) => {
  if (value === null || !categoryValues.includes(value as any)) {
    throw new Error(`sinch-tag: invalid category attribute: ${value}`)
  }
}
