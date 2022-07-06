import type { TSinchElementReact } from '../types'

export type TSinchTabsOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  checked: boolean,
  text: string,
  focus(): void,
  blur(): void,
}

export type TSinchTabsOptionReact = TSinchElementReact<TSinchTabsOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  'aria-label': string,
}
