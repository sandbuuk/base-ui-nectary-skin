import type { TSinchElementReact } from '../types'

export type TSinchIllustrationBackground = 'grey' | 'gray' | 'green' | 'blue' | 'yellow' | 'white'
export type TSinchIllustrationVAlign = 'top' | 'center' | 'bottom'
export type TSinchIllustrationHAlign = 'left' | 'center' | 'right'

export type TSinchIllustrationElement = HTMLElement & {
  size: number,
  background: TSinchIllustrationBackground | null,
  valign: TSinchIllustrationVAlign | null,
  halign: TSinchIllustrationHAlign | null,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'background', value: TSinchIllustrationBackground): void,
  setAttribute(name: 'valign', value: TSinchIllustrationVAlign): void,
  setAttribute(name: 'halign', value: TSinchIllustrationHAlign): void,
}

export type TSinchIllustrationProps = {
  size?: number,
  background?: TSinchIllustrationBackground,
  valign?: TSinchIllustrationVAlign,
  halign?: TSinchIllustrationHAlign,
}

export type TSinchIllustrationReact = TSinchElementReact<TSinchIllustrationElement> & TSinchIllustrationProps
