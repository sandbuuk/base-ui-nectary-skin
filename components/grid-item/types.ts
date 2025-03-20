import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchGridItemProps = {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}

export type TSinchGridItem = {
  props: TSinchGridItemProps,
}

export type TSinchGridItemElement = NectaryComponentVanillaByType<TSinchGridItem>
export type TSinchGridItemReact = NectaryComponentReactByType<TSinchGridItem>
