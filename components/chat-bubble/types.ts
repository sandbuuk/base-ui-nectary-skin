import type { TSinchElementReact } from '../types'

export type TSinchChatBubbleType = 'customer' | 'agent' | 'agent-prev'
export type TSinchChatBubbleStatus = 'sending' | 'sent' | 'received' | 'seen' | 'error'

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
