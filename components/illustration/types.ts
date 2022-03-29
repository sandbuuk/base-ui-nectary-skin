import type { TSinchElementReact } from '../types'

export type TSinchIllustrationElement = HTMLElement & {
  size: number,
}

export type TSinchIllustrationReact = TSinchElementReact<TSinchIllustrationElement> & {
  size?: number,
}
