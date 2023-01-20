import type { TSinchElementReact } from '../types'

export type TSinchCodeTagElement = HTMLElement & {
  /** Text content of hyperlink */
  text: string,
  /** Text content of hyperlink */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchCodeTagReact = TSinchElementReact<TSinchCodeTagElement> & {
  /** Text content of hyperlink */
  text: string,
}
