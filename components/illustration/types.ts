import type { TSinchElementReact } from '../types'

export type TSinchIllustrationElement = HTMLElement & {
  size: number,
  setAttribute(name: 'size', value: string): void,
}

export type TSinchIllustrationReact = TSinchElementReact<TSinchIllustrationElement> & {
  size?: number,
}
