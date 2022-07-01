import type { TSinchElementReact } from '../types'
import type { FocusEvent } from 'react'

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
  onFocus?: (e: FocusEvent<TSinchRadioOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchRadioOptionElement>) => void,
}
