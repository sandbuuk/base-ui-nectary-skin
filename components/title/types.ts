import type { TSinchElementReact } from '../types'

export type TSinchTitleType = 'xl' | 'l' | 'm' | 's' | 'xs'
export type TSinchTitleLevel = '1' | '2' | '3' | '4' | '5' | '6'

export type TSinchTitleElement = HTMLElement & {
  text: string,
  type: TSinchTitleType,
  level: TSinchTitleLevel,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'type', value: TSinchTitleType): void,
  setAttribute(name: 'level', value: TSinchTitleLevel): void,
}

export type TSinchTitleReact = TSinchElementReact<TSinchTitleElement> & {
  text: string,
  type: TSinchTitleType,
  level: TSinchTitleLevel,
}
