import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type TSinchButtonGroupElement = HTMLElement & Pick<TSinchButtonElement, 'size' | 'type'>

export type TSinchButtonGroupReact = TSinchElementReact<TSinchButtonGroupElement> & Pick<TSinchButtonReact, 'size' | 'type'>
