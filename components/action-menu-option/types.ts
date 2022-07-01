import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

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
  onClick: (e: MouseEvent<TSinchActionMenuOptionElement>) => void,
  onFocus?: (e: FocusEvent<TSinchActionMenuOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchActionMenuOptionElement>) => void,
}
