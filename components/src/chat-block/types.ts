import type { TSinchElementReact } from '../types'

export type TSinchChatBlockType = 'customer' | 'agent' | 'agent-prev'

export type TSinchChatBlockElement = HTMLElement & {
  /** Type */
  type: TSinchChatBlockType | null,
  /** First name */
  firstName: string | null,
  /** Last name */
  lastName: string | null,
  /** Timestamp */
  timestamp: string | null,
  /** Type */
  setAttribute(name: 'type', value: TSinchChatBlockType): void,
  /** First name */
  setAttribute(name: 'firstName', value: string): void,
  /** Last name */
  setAttribute(name: 'lastName', value: string): void,
  /** Timestamp */
  setAttribute(name: 'timestamp', value: string): void,
}

export type TSinchChatBlockReact = TSinchElementReact<TSinchChatBlockElement> & {
  /** Type */
  type: TSinchChatBlockType,
  /** First name */
  firstName?: string,
  /** Last name */
  lastName?: string,
  /** Timestamp */
  timestamp?: string,
}
