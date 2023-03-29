import type { TSinchElementReact } from '@sinch-engage/nectary/types'

export type TSinchGridElement = HTMLElement & {
  /** no grid padding */
  noPadding: boolean,

  /** no Grid Padding */
  setAttribute(name: 'nopadding', value: ''): void,
}

export type TSinchGridReact = TSinchElementReact<TSinchGridElement> & {
  /** no grid padding */
  noPadding?: boolean,
}
