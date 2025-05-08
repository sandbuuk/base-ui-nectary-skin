import type { TSinchButtonType, TSinchButtonFormType } from './types'

export const typeValues: readonly TSinchButtonType[] = [
  'primary',
  'secondary',
  'subtle-primary',
  'subtle-secondary',
  'cta-primary',
  'cta-secondary',
  'destructive',
]

export const formTypeValues: readonly TSinchButtonFormType[] = [
  'submit',
  'reset',
  'button',
]
