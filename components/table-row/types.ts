import type { TSinchElementReact } from '../types'

export type TSinchTableRowElement = HTMLElement & {
  sticky: boolean,
  selected: boolean,
  setAttribute(name: 'sticky', value: ''): void,
  setAttribute(name: 'selected', value: ''): void,
}

export type TSinchTableRowReact = TSinchElementReact<TSinchTableRowElement> & {
  sticky?: boolean,
  selected?: boolean,
}
