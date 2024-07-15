import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type TSinchButtonGroupItemElement = HTMLElement & Pick<TSinchButtonElement, 'text' | 'disabled' | 'toggled' | 'addEventListener' | 'setAttribute'> & {}

export type TSinchButtonGroupItemReact = TSinchElementReact<TSinchButtonGroupItemElement> & Pick<TSinchButtonReact, 'text' | 'disabled' | 'toggled' | 'on-blur' | 'on-click' | 'on-focus' | 'aria-label'> & {}
