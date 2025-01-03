import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-portal-engage-icon-wordmark', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-engage-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-engage-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
