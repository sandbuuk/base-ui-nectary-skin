import type { TSinchButtonProps, TSinchButtonReact } from '../button/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export { TSinchButtonReact }

export type TSinchButtonGroupProps = {
  size?: TSinchButtonProps['size'],
  type?: TSinchButtonProps['type'],
  'aria-label': TSinchButtonProps['aria-label'],
}

export type TSinchButtonGroup = {
  props: TSinchButtonGroupProps,
}

export type TSinchButtonGroupElement = NectaryComponentVanillaByType<TSinchButtonGroup>
export type TSinchButtonGroupReact = NectaryComponentReactByType<TSinchButtonGroup>
