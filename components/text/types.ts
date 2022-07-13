import type { TSinchElementReact } from '../types'

export type TSinchTextType = 'm' | 's' | 'xs' | 'xxs'

export type TSinchTextElement = HTMLElement & {
  type: TSinchTextType,
  inline: boolean,
  emphasized: boolean,
  setAttribute(name: 'type', value: TSinchTextType): void,
  setAttribute(name: 'inline', value: ''): void,
  setAttribute(name: 'emphasized', value: ''): void,
}

export type TSinchTextReact = TSinchElementReact<TSinchTextElement> & {
  type: TSinchTextType,
  inline?: boolean,
  emphasized?: boolean,
}
