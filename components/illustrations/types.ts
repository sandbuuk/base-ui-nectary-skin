import type { TSinchElementReact } from '../types'

export type TSinchIllustrationBackground = 'grey' | 'green' | 'blue' | 'yellow' | 'white'
export type TSinchIllustrationVAlign = 'top' | 'center' | 'bottom'

export type TSinchIllustrationElement = HTMLElement & {
  size: number,
  background: TSinchIllustrationBackground | null,
  valign: TSinchIllustrationVAlign | null,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'background', value: TSinchIllustrationBackground): void,
  setAttribute(name: 'valign', value: TSinchIllustrationVAlign): void,
}

export type TSinchIllustrationReact = TSinchElementReact<TSinchIllustrationElement> & {
  size?: number,
  background?: TSinchIllustrationBackground,
  valign?: TSinchIllustrationVAlign,
}
