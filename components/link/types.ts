import type { TSinchElementReact } from '../types'

export type TSinchLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  external: boolean,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'href', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'external', value: ''): void,
}

export type TSinchLinkReact = TSinchElementReact<TSinchLinkElement> & {
  text: string,
  href: string,
  disabled?: boolean,
  external?: boolean,
}
