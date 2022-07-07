import type { TSinchElementReact } from '../types'
import type { levelValues, typeValues } from './utils'

export type TSinchTitleType = typeof typeValues[number]
export type TSinchTitleLevel = typeof levelValues[number]

export type TSinchTitleElement = HTMLElement & {
  text: string,
  type: TSinchTitleType,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'type', value: TSinchTitleType): void,
}

export type TSinchTitleReact = TSinchElementReact<TSinchTitleElement> & {
  text: string,
  type: TSinchTitleType,
  'aria-level': TSinchTitleLevel,
}
