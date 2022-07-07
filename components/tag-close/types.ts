import type { TSinchElementReact } from '../types'

export type TSinchTagCloseElement = HTMLElement & {
  focus(): void,
  blur(): void,
}

export type TSinchTagCloseReact = TSinchElementReact<TSinchTagCloseElement>
