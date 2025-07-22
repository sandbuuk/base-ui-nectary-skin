import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoMessageMediaIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-message-media-icon', LogoMessageMediaIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-message-media-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-message-media-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-message-media-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
