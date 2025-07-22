import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoSimpleTextingIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-simple-texting-icon-wordmark', LogoSimpleTextingIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-simple-texting-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-simple-texting-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-simple-texting-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
