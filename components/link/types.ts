import type { TSinchElementReact } from '../types'

export type TSinchLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  external: boolean,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
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
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
