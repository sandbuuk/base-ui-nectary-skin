export type TSinchSize = 'l' | 'm' | 's'
export type TSinchSizeEx = TSinchSize | 'xs'

export const DEFAULT_SIZE: TSinchSize = 'm'

export const sizeValues: readonly TSinchSize[] = ['l', 'm', 's']
export const sizeExValues: readonly TSinchSizeEx[] = [...sizeValues, 'xs']
