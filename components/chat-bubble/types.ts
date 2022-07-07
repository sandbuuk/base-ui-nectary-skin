import type { TSinchElementReact } from '../types'
import type { statusValues, typeValues } from './utils'

export type TSinchChatBubbleType = typeof typeValues[number]

export type TSinchChatBubbleStatus = typeof statusValues[number]

export type TSinchChatBubbleElement = HTMLElement & {
  readonly type: TSinchChatBubbleType | null,
  text: string,
  status: TSinchChatBubbleStatus | null,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'status', value: TSinchChatBubbleStatus): void,
}

export type TSinchChatBubbleReact = TSinchElementReact<TSinchChatBubbleElement> & {
  text: string,
  status?: TSinchChatBubbleStatus,
}
