import type { TSinchElementReact } from '../types'

export type TSinchAnimationDirection = 'forward' | 'backward'

export type TSinchAnimationElement = HTMLElement & {
  size: number,
  setAttribute(name: 'size', value: string): void,
  play(): void,
  stop(): void,
  pause(): void,
}

export type TSinchAnimationProps = {
  size?: number,
  loop?: boolean,
  autoplay?: boolean,
  direction?: TSinchAnimationDirection,
}

export type TSinchAnimationReact = TSinchElementReact<TSinchAnimationElement> & TSinchAnimationProps
