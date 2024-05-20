import type { TSinchElementReact } from '../types'

export type TSinchVerticalStepperElement = HTMLElement & {
  /** Current item index, starting from 1 */
  index: string,
  /** Current item index, starting from 1 */
  setAttribute(name: 'index', value: string): void,
}

export type TSinchVerticalStepperReact = TSinchElementReact<TSinchVerticalStepperElement> & {
  /** Current item index, starting from 1 */
  index: string,
  /** Label that is used for a11y */
  'aria-label': string,
}
