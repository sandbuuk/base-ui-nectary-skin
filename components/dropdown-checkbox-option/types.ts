import type { TSinchElementReact } from '../types'

export type TSinchDropdownCheckboxOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
}

export type TSinchDropdownCheckboxOptionReact = TSinchElementReact<TSinchDropdownCheckboxOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
