import type { TSinchElementReact } from '../types'

export type TSinchDropdownRadioOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
}

export type TSinchDropdownRadioOptionReact = TSinchElementReact<TSinchDropdownRadioOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
