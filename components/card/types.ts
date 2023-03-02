import type { TRect, TSinchElementReact } from '../types'

export type TSinchCardElement = HTMLElement & {
  /** Text */
  text: string,
  /** Caption */
  caption: string,
  /** Label */
  label: string | null,
  /** Disabled */
  disabled: boolean,
  readonly dragRect: TRect | null,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Caption */
  setAttribute(name: 'caption', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Draggable */
  setAttribute(name: 'draggable', value: ''): void,
}

export type TSinchCardReact = TSinchElementReact<TSinchCardElement> & {
  /** Text */
  text: string,
  /** Caption */
  caption: string,
  /** Label */
  label?: string,
  /** Disabled */
  disabled?: boolean,
  /** Draggable */
  draggable?: boolean,
}
