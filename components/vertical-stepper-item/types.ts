import type { TSinchElementReact } from '../types'

export type TSinchVerticalStepperStatusType = 'error' | 'skip'

export type TSinchVerticalStepperItemElement = HTMLElement & {
  /** Label */
  label: string,
  /** Description */
  description: string | null,
  /** Status */
  status: TSinchVerticalStepperStatusType | null,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Description */
  setAttribute(name: 'description', value: string): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchVerticalStepperStatusType): void,
}

export type TSinchVerticalStepperItemReact = TSinchElementReact<TSinchVerticalStepperItemElement> & {
  /** Label */
  label: string,
  /** Description */
  description?: string,
  /** Status */
  status?: TSinchVerticalStepperStatusType,
}
