import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoMessageMediaIconWordmark = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-message-media-icon-wordmark', LogoMessageMediaIconWordmark)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-message-media-icon-wordmark': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-message-media-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-message-media-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
