import type { TSinchElementReact } from '../types'

export type TSinchFileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error'

export type TSinchFileStatusElement = HTMLElement & {
  type: TSinchFileStatusType,
  filename: string,
  setAttribute(name: 'type', value: TSinchFileStatusType): void,
  setAttribute(name: 'filename', value: string): void,
}

export type TSinchFileStatusReact = TSinchElementReact<TSinchFileStatusElement> & {
  type: TSinchFileStatusType,
  filename: string,
}
