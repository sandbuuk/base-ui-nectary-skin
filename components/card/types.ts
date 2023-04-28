import type { TRect, TSinchElementReact } from '../types'

export type TSinchCardElement = HTMLElement & {
  /** Text */
  text: string,
  /** Caption */
  caption: string,
  /** Label */
  label: string | null,
  readonly dragRect: TRect | null,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Caption */
  setAttribute(name: 'caption', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
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
  /** Draggable */
  draggable?: boolean,
}
