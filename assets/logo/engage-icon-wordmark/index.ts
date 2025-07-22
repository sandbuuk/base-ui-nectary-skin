import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoEngageIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-engage-icon-wordmark', LogoEngageIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-engage-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-engage-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-engage-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
