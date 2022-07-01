import type { TSinchElementReact } from '../types'

export type TSinchDropdownTextOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
  readonly icon: Element | null,
}

export type TSinchDropdownTextOptionReact = TSinchElementReact<TSinchDropdownTextOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
