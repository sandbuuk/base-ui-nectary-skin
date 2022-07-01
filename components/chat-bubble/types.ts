import type { TSinchElementReact } from '../types'
import type { statusValues, typeValues } from './utils'

export type TSinchChatBubbleType = typeof typeValues[number]

export type TSinchChatBubbleStatus = typeof statusValues[number]

export type TSinchChatBubbleElement = HTMLElement & {
  readonly type: TSinchChatBubbleType | null,
  text: string,
  status: TSinchChatBubbleStatus | null,
}

export type TSinchChatBubbleReact = TSinchElementReact<TSinchChatBubbleElement> & {
  text: string,
  status?: TSinchChatBubbleStatus,
}
