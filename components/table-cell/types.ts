import type { TSinchElementReact } from '../types'

export type TSinchTableAlignType = 'start' | 'center' | 'end'

export type TSinchTableCellElement = HTMLElement & {
  align: TSinchTableAlignType,
  setAttribute(name: 'align', value: TSinchTableAlignType): void,
}

export type TSinchTableCellReact = TSinchElementReact<TSinchTableCellElement> & {
  align?: TSinchTableAlignType,
}
