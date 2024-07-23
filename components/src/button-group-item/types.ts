import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type TSinchButtonGroupItemElement = HTMLElement & {
  text: TSinchButtonElement['text'],
  disabled: TSinchButtonElement['disabled'],
  toggled: TSinchButtonElement['toggled'],
  addEventListener: TSinchButtonElement['addEventListener'],
  setAttribute: TSinchButtonElement['setAttribute'],
}

export type TSinchButtonGroupItemReact = TSinchElementReact<TSinchButtonGroupItemElement> & {
  text?: TSinchButtonReact['text'],
  disabled?: TSinchButtonReact['disabled'],
  toggled?: TSinchButtonReact['toggled'],
  'on-blur'?: TSinchButtonReact['on-blur'],
  'on-click'?: TSinchButtonReact['on-click'],
  'on-focus'?: TSinchButtonReact['on-focus'],
  'aria-label': TSinchButtonReact['aria-label'],
}
