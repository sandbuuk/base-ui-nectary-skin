import type { NectaryComponentReactByType } from '@nectary/components/types'

export type TSinchGridElement = HTMLElement & {
  /** no grid padding */
  noPadding: boolean,

  /** no Grid Padding */
  setAttribute(name: 'nopadding', value: ''): void,
}

export type TSinchGridReact = NectaryComponentReactByType<TSinchGridElement> & {
  /** no grid padding */
  noPadding?: boolean,
}
