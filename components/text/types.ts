import type { TSinchElementReact } from '../types'
import type { typeValues } from './utils'

export type TSinchTextType = typeof typeValues[number]

export type TSinchTextElement = HTMLElement & {
  type: TSinchTextType,
  text: string,
  inline: boolean,
  emphasized: boolean,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'type', value: TSinchTextType): void,
  setAttribute(name: 'inline', value: ''): void,
  setAttribute(name: 'emphasized', value: ''): void,
}

export type TSinchTextReact = TSinchElementReact<TSinchTextElement> & {
  type: TSinchTextType,
  text: string,
  inline?: boolean,
  emphasized?: boolean,
}
