import type { TSinchElementReact } from '../types'

export type TSinchHorizontalStepperStatusType = 'error' | 'skip'

export type TSinchHorizontalStepperItemElement = HTMLElement & {
  label: string,
  description: string | null,
  status: TSinchHorizontalStepperStatusType | null,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'description', value: string): void,
  setAttribute(name: 'status', value: TSinchHorizontalStepperStatusType): void,
}

export type TSinchHorizontalStepperItemReact = TSinchElementReact<TSinchHorizontalStepperItemElement> & {
  label: string,
  description?: string,
  status?: TSinchHorizontalStepperStatusType,
}
