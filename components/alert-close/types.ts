import type { TSinchElementReact } from '../types'

export type TSinchAlertCloseElement = HTMLElement & {
  focus(): void,
  blur(): void,
}

export type TSinchAlertCloseReact = TSinchElementReact<TSinchAlertCloseElement>
