import type { TAlignType } from '../table-cell/types'
import type { TSinchElementReact } from '../types'

export type TSinchTableHeaderCellElement = HTMLElement & {
  text: string | null,
  align: TAlignType,
  fit: boolean,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'align', value: TAlignType): void,
  setAttribute(name: 'fit', value: ''): void,
}

export type TSinchTableHeaderCellReact = TSinchElementReact<TSinchTableHeaderCellElement> & {
  text?: string,
  fit?: boolean,
  align?: TAlignType,
}
