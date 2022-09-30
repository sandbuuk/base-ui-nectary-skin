export const NO_COLOR = '' as const

export type TSinchColorName =
  | typeof NO_COLOR
  | 'Blue 10'
  | 'Blue 20'
  | 'Blue 30'
  | 'Blue 40'
  | 'Blue 50'
  | 'Green 10'
  | 'Green 20'
  | 'Green 30'
  | 'Yellow 20'
  | 'Yellow 10'
  | 'Orange 10'
  | 'Orange 30'
  | 'Orange 20'
  | 'Coral 10'
  | 'Pink 10'
  | 'Pink 20'
  | 'Brown 10'
  | 'Brown 20'
  | 'Gray 10'
  | 'Gray 20'
  | 'Red 10'
  | 'Skin tone 0'
  | 'Skin tone 10'
  | 'Skin tone 20'
  | 'Skin tone 30'
  | 'Skin tone 40'
  | 'Skin tone 50'

export const colorNameValues: readonly TSinchColorName[] = [
  NO_COLOR,
  'Blue 10',
  'Blue 20',
  'Blue 30',
  'Blue 40',
  'Blue 50',
  'Green 10',
  'Green 20',
  'Green 30',
  'Yellow 10',
  'Yellow 20',
  'Orange 10',
  'Orange 20',
  'Orange 30',
  'Pink 10',
  'Pink 20',
  'Brown 10',
  'Brown 20',
  'Gray 10',
  'Gray 20',
  'Coral 10',
  'Red 10',
  'Skin tone 0',
  'Skin tone 10',
  'Skin tone 20',
  'Skin tone 30',
  'Skin tone 40',
  'Skin tone 50',
]

type TAssertColorName = (value: string | null) => asserts value is TSinchColorName

export const assertColorNameValue: TAssertColorName = (value) => {
  if (value === null || !colorNameValues.includes(value as TSinchColorName)) {
    throw new Error(`Invalid color name: "${value}"`)
  }
}

export const colorMap: Record<TSinchColorName, { value: string, isInverted: boolean }> = {
  [NO_COLOR]: { value: NO_COLOR, isInverted: false },
  'Blue 50': { value: 'night-400', isInverted: true },
  'Blue 40': { value: 'aqua-400', isInverted: false },
  'Blue 30': { value: 'aqua-200', isInverted: false },
  'Blue 20': { value: 'night-200', isInverted: false },
  'Blue 10': { value: 'informative-200', isInverted: false },
  'Green 30': { value: 'grass-400', isInverted: false },
  'Green 20': { value: 'grass-200', isInverted: false },
  'Green 10': { value: 'success-200', isInverted: false },
  'Yellow 20': { value: 'bolt-400', isInverted: false },
  'Yellow 10': { value: 'bolt-200', isInverted: false },
  'Orange 30': { value: 'orange-400', isInverted: false },
  'Orange 20': { value: 'orange-200', isInverted: false },
  'Orange 10': { value: 'warning-200', isInverted: false },
  'Pink 20': { value: 'candy-400', isInverted: false },
  'Pink 10': { value: 'candy-200', isInverted: false },
  'Brown 20': { value: 'mud-400', isInverted: true },
  'Brown 10': { value: 'mud-200', isInverted: false },
  'Gray 20': { value: 'dirt-400', isInverted: false },
  'Gray 10': { value: 'dirt-200', isInverted: false },
  'Coral 10': { value: 'berry-200', isInverted: false },
  'Red 10': { value: 'error-200', isInverted: false },
  'Skin tone 0': { value: 'skin-tone-10', isInverted: false },
  'Skin tone 10': { value: 'skin-tone-20', isInverted: false },
  'Skin tone 20': { value: 'skin-tone-30', isInverted: false },
  'Skin tone 30': { value: 'skin-tone-40', isInverted: false },
  'Skin tone 40': { value: 'skin-tone-50', isInverted: false },
  'Skin tone 50': { value: 'skin-tone-60', isInverted: true },
}
