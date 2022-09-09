import type { TSinchElementReact } from '../types'

export type TSinchFileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error'

export type TSinchFileStatusElement = HTMLElement & {
  /** File status type */
  type: TSinchFileStatusType,
  /** File name */
  filename: string,
  /** File status type */
  setAttribute(name: 'type', value: TSinchFileStatusType): void,
  /** File name */
  setAttribute(name: 'filename', value: string): void,
}

export type TSinchFileStatusReact = TSinchElementReact<TSinchFileStatusElement> & {
  /** File status type */
  type: TSinchFileStatusType,
  /** File name */
  filename: string,
}
