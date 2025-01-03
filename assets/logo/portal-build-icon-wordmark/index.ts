import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-portal-build-icon-wordmark', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon-wordmark': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-build-icon-wordmark': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
