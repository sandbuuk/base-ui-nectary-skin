import type { TSinchIcons } from './generated-icon-type'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export { TSinchIcons }

export type TSinchIconProps = ({
  /** Icon font version */
  'icons-version': '1',
  /** Icon name */
  name: string,
} | {
  /** Icon font version */
  'icons-version': '2',
  /** Icon name */
  name: TSinchIcons,
})

export type TSinchIconStyle = {
  // Component Properties
  '--sinch-comp-icon-font-weight'?: string,
  '--sinch-comp-icon-font-family'?: string,
  '--sinch-comp-icon-font-feature-settings'?: string,
  '--sinch-comp-icon-font-family-zero-to-d'?: string,
  '--sinch-comp-icon-font-family-e-to-o'?: string,
  '--sinch-comp-icon-font-family-p-to-z'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-icon'?: string,

  // System Colors
  '--sinch-sys-color-text-default'?: string,
}

export type TSinchIcon = {
  props: TSinchIconProps,
  style: TSinchIconStyle,
}

export type TSinchIconElement = NectaryComponentVanillaByType<TSinchIcon>
export type TSinchIconReact = NectaryComponentReactByType<TSinchIcon>
