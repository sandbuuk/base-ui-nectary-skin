import type { TSinchElementReact } from '../types'

export type TSinchButtonType = 'primary' | 'secondary' | 'cta-primary' | 'cta-secondary' | 'destructive'

export type TSinchButtonElement = HTMLElement & {
  /** Type */
  type: TSinchButtonType,
  /** Text content */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Small */
  small: boolean,
  focus(): void,
  blur(): void,
  /** Type */
  setAttribute(attr: 'type', value: TSinchButtonType): void,
  /** Text content */
  setAttribute(attr: 'text', value: string): void,
  /** Disabled */
  setAttribute(attr: 'disabled', value: ''): void,
  /** Small */
  setAttribute(attr: 'small', value: ''): void,
}

export type TSinchButtonReact = TSinchElementReact<TSinchButtonElement> & {
  /** Type */
  type: TSinchButtonType,
  /** Text content */
  text: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
  /** Small */
  small?: boolean,
}
