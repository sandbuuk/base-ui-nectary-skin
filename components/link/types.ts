import type { TSinchElementReact } from '../types'

export type TSinchLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  external: boolean,
  preventDefault: boolean,
  standalone: boolean,
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'href', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'external', value: ''): void,
  setAttribute(name: 'preventdefault', value: ''): void,
  setAttribute(name: 'standalone', value: ''): void,
}

export type TSinchLinkReact = TSinchElementReact<TSinchLinkElement> & {
  text: string,
  href: string,
  disabled?: boolean,
  external?: boolean,
  preventDefault?: boolean,
  standalone?: boolean,
  'aria-label': string,
  'on-click'?: (e: CustomEvent<void>) => void,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
