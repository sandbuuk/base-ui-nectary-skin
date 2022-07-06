import type { TSinchElementReact } from '../types'

export type TSinchActionMenuOptionElement = HTMLElement & {
  text: string,
  selected: boolean,
  disabled: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchActionMenuOptionReact = TSinchElementReact<TSinchActionMenuOptionElement> & {
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
