import type { TSinchElementReact } from '../types'

export type TSinchTagCategory = 'candy' | 'bolt' | 'aqua' | 'grass' | 'berry' | 'orange' | 'night' | 'mud' | 'dirt'

export type TSinchTagElement = HTMLElement & {
  category: TSinchTagCategory | null,
  text: string,
  inverted: boolean,
  small: boolean,
  setAttribute(name: 'category', value: TSinchTagCategory): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  category?: TSinchTagCategory,
  text: string,
  inverted?: boolean,
  small?: boolean,
}
