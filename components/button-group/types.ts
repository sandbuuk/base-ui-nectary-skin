import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type TSinchButtonGroupElement = HTMLElement & {
  size: TSinchButtonElement['size'],
  type: TSinchButtonElement['type'],
}

export type TSinchButtonGroupReact = TSinchElementReact<TSinchButtonGroupElement> & {
  size?: TSinchButtonReact['size'],
  type?: TSinchButtonReact['type'],
  'aria-label': TSinchButtonReact['aria-label'],
}
