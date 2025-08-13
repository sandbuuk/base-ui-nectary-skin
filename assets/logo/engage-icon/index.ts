import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html?raw'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export * from '../types'

export const LogoEngageIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-engage-icon', LogoEngageIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-engage-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-engage-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
