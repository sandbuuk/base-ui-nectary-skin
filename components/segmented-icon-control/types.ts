import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSegmentedIconControlElement = HTMLElement & {
  value: string,
  multiple: boolean,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
}

export type TSinchSegmentedIconControlReact = TSinchElementReact<TSinchSegmentedIconControlElement> & {
  value: string,
  multiple?: boolean,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchSegmentedIconControlElement, CustomEvent<string>>) => void,
}
