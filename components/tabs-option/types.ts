import type { TSinchElementReact } from '../types'
import type { FocusEvent } from 'react'

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
  onFocus?: (e: FocusEvent<TSinchTabsOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchTabsOptionElement>) => void,
}
