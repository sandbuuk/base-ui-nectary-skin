import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSegmentExpandElement = HTMLElement & {
  value: boolean,
  focus(): void,
  blur(): void,
  addEventListener(type: 'change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchSegmentExpandReact = TSinchElementReact<TSinchSegmentExpandElement> & {
  value: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSegmentExpandElement, CustomEvent<boolean>>) => void,
}
