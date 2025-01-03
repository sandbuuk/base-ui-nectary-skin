import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-portal-build-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-build-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-build-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
