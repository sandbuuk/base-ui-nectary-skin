import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-simple-texting-icon-wordmark', createLogoClass(templateHTML))

declare global {
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
