import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSegmentedControlElement = HTMLElement & {
  value: string,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchSegmentedControlReact = TSinchElementReact<TSinchSegmentedControlElement> & {
  value: string,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchSegmentedControlElement, CustomEvent<string>>) => void,
}
