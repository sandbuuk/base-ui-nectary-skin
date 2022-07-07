import type { TSinchElementReact } from '../types'
import type { buttonTypes } from './utils'

export type TSinchButtonType = typeof buttonTypes[number]

export type TSinchButtonElement = HTMLElement & {
  type: TSinchButtonType,
  text: string,
  disabled: boolean,
  small: boolean,
  focus(): void,
  blur(): void,
  setAttribute(attr: 'type', value: TSinchButtonType): void,
  setAttribute(attr: 'text', value: string): void,
  setAttribute(attr: 'disabled', value: ''): void,
  setAttribute(attr: 'small', value: ''): void,
}

export type TSinchButtonReact = TSinchElementReact<TSinchButtonElement> & {
  type: TSinchButtonType,
  text: string,
  'aria-label': string,
  disabled?: boolean,
  small?: boolean,
}
