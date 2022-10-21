import type { TSinchElementReact } from '../types'

export type TSinchChatBubbleType = 'customer' | 'agent' | 'agent-prev'
export type TSinchChatBubbleStatus = 'sending' | 'sent' | 'received' | 'seen' | 'error'

export type TSinchChatBubbleElement = HTMLElement & {
  readonly type: TSinchChatBubbleType | null,
  /** Text */
  text: string,
  /** Status */
  status: TSinchChatBubbleStatus | null,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchChatBubbleStatus): void,
}

export type TSinchChatBubbleReact = TSinchElementReact<TSinchChatBubbleElement> & {
  /** Text */
  text: string,
  /** Status */
  status?: TSinchChatBubbleStatus,
}
