import type { TSinchElementReact } from '../types'
import type { alignValues } from './utils'

export type TAlignType = typeof alignValues[number]

export type TSinchTableCellElement = HTMLElement & {
  align: TAlignType,
  setAttribute(name: 'align', value: TAlignType): void,
}

export type TSinchTableCellReact = TSinchElementReact<TSinchTableCellElement> & {
  align?: TAlignType,
}
