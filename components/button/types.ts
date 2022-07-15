import type { TSinchElementReact } from '../types'

export type TSinchButtonType = 'primary' | 'secondary' | 'cta-primary' | 'cta-secondary' | 'destructive'

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
