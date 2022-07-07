import type { TSinchChatBubbleType } from '../chat-bubble/types'
import type { TSinchElementReact } from '../types'

export type TSinchChatBlockElement = HTMLElement & {
  type: TSinchChatBubbleType | null,
  firstName: string | null,
  lastName: string | null,
  timestamp: string | null,
  setAttribute(name: 'type', value: TSinchChatBubbleType): void,
  setAttribute(name: 'firstName', value: string): void,
  setAttribute(name: 'lastName', value: string): void,
  setAttribute(name: 'timestamp', value: string): void,
}

export type TSinchChatBlockReact = TSinchElementReact<TSinchChatBlockElement> & {
  type: TSinchChatBubbleType,
  firstName?: string,
  lastName?: string,
  timestamp?: string,
}
