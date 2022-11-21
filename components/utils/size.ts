export type TSinchSize = 'l' | 'm' | 's'
export type TSinchSizeEx = TSinchSize | 'xs'

export const DEFAULT_SIZE: TSinchSize = 'm'

export const sizeValues: readonly TSinchSize[] = ['l', 'm', 's']
export const sizeExValues: readonly TSinchSizeEx[] = [...sizeValues, 'xs']

type TAssertSize = (value: string | null, name: string) => asserts value is TSinchSize

export const assertSize: TAssertSize = (value, name) => {
  if (value === null || value.length === 0) {
    // Allow default size
    return
  }

  if (!sizeValues.includes(value as any)) {
    throw new Error(`Invalid size attribute for ${name}: ${value}`)
  }
}
type TAssertSizeEx = (value: string | null, name: string) => asserts value is TSinchSizeEx

export const assertSizeEx: TAssertSizeEx = (value, name) => {
  if (value === null || value.length === 0) {
    // Allow default size
    return
  }

  if (!sizeExValues.includes(value as any)) {
    throw new Error(`Invalid size attribute for ${name}: ${value}`)
  }
}
