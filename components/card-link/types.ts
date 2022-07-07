import type { TSinchElementReact } from '../types'

export type TSinchCardLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'href', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchCardLinkReact = TSinchElementReact<TSinchCardLinkElement> & {
  text: string,
  href: string,
  disabled?: boolean,
}
