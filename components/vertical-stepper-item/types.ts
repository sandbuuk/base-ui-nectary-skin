import type { TSinchElementReact } from '../types'

export type TSinchVerticalStepperStatusType = 'error' | 'skip'

export type TSinchVerticalStepperItemElement = HTMLElement & {
  label: string,
  description: string | null,
  status: TSinchVerticalStepperStatusType | null,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'description', value: string): void,
  setAttribute(name: 'status', value: TSinchVerticalStepperStatusType): void,
}

export type TSinchVerticalStepperItemReact = TSinchElementReact<TSinchVerticalStepperItemElement> & {
  label: string,
  description?: string,
  status?: TSinchVerticalStepperStatusType,
}
