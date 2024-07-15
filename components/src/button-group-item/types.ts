import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type TSinchButtonGroupItemType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type TSinchButtonGroupItemElement = HTMLElement & TSinchButtonElement & {
}

export type TSinchButtonGroupItemReact = TSinchElementReact<TSinchButtonGroupItemElement> & TSinchButtonReact & {
}
