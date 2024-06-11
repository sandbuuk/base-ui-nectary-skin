import type { TSinchElementReact } from '../types'

export type TSinchHorizontalStepperStatusType = 'error' | 'skip'

export type TSinchHorizontalStepperItemElement = HTMLElement & {
  /** Label */
  label: string,
  /** Description */
  description: string | null,
  /** Status */
  status: TSinchHorizontalStepperStatusType | null,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Description */
  setAttribute(name: 'description', value: string): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchHorizontalStepperStatusType): void,
}

export type TSinchHorizontalStepperItemReact = TSinchElementReact<TSinchHorizontalStepperItemElement> & {
  /** Label */
  label: string,
  /** Description */
  description?: string,
  /** Status */
  status?: TSinchHorizontalStepperStatusType,
}
