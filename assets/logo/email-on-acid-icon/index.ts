import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoEmailOnAcidIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-email-on-acid-icon', LogoEmailOnAcidIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-email-on-acid-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-email-on-acid-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-email-on-acid-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
