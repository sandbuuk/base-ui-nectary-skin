import type { TSinchElementReact } from '../types'

export type TSinchRadioOptionElement = HTMLElement & {
  value: string,
  checked: boolean,
  disabled: boolean,
  text: string,
  focus(): void,
  blur(): void,
}

export type TSinchRadioOptionReact = TSinchElementReact<TSinchRadioOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  'aria-label': string,
}
