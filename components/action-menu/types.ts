import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchActionMenuProps = {
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchActionMenu = {
  props: TSinchActionMenuProps,
}

export type TSinchActionMenuElement = NectaryComponentVanillaByType<TSinchActionMenu>
export type TSinchActionMenuReact = NectaryComponentReactByType<TSinchActionMenu>
